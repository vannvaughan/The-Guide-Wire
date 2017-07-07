module.exports = {
    
    findUser: function(req, res, next){  
        // req.app.get('db').user_table.find({
        //     first_name: req.body.first_name,
        //     last_name: req.body.last_name
        // })
        req.app.get('db').find_user([req.body.first_name, req.body.last_name])
            .then(users => {
                if(users.length){
                    return res.status(401).json("User Already Exists")
                } else {
                    next()
                }
            })
            .catch( (err) => {
                console.log(err)
                res.status(500).json(err)
            })
        },

    createProfile: function(req, res, next){
        req.app.get('db').create_profile([req.body.first_name, req.body.last_name, req.body.location, req.body.bio, req.body.traveler, req.body.guide, req.body.user_password])
            .then((user) => {
                console.log('Success!')
                res.status(200).json(user[0])
            })

            .catch(() => {
                console.log('Failure!')
                res.status(500).json('Failure!')})
    }  
}

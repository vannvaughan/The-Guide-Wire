module.exports = {

    getUserById: function(req, res, next){
        console.log('req.params is:', req.params.id)
        req.app.get('db')
        .get_user_id([req.params.id])
            .then(user => res.status(200).json(user))
            .catch(err => res.status(404).json(err))

    }






}
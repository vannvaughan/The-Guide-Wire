module.exports = {

    postGuideReview: function(req, res, next){
        console.log('homeServerCtrl:', req.body.poster_id)
        req.app.get('db')
            .post_guide_review([req.params.id, req.body.review.rating, req.body.review.review, req.body.poster_id])
            .then(response => {
                console.log(response)
                res.status(200).json(response)
            })
            .catch(err =>{
                console.log(err)
                res.status(500).json(err)
            })


    }
}
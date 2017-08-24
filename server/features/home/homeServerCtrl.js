module.exports = {

    postGuideReview: function(req, res, next){
        req.app.get('db')
            .post_guide_review([req.params.id, req.body.review.rating, req.body.review.review, req.body.poster_id])
            .then(response => {
                
                res.status(200).json(response)
            })
            .catch(err =>{
        
                res.status(500).json(err)
            })


    }
}
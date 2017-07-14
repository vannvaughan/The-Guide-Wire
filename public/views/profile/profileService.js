angular.module('app')
    .service('profileService', function( $http, loginService ){

        this.getGuideReviews = function(id) {
            return $http.get('/api/guideReviews/' + id)
        }
        this.postGuideReview = function(review, id, poster_id) {
            return $http.post('/api/guideReviews/' + id, {review: review, poster_id: poster_id})
        }    
        
    })
angular.module('app')
    .service('profileService', function( $http, loginService ){

        this.getGuideReviews = function(id) {
            return $http.get('/api/guideReviews/' + id)
        }
        this.postGuideReviews = function(review) {
            return $http.post('/api/guideReviews', review)
        }    
        
    })
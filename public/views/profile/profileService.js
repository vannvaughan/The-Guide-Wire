angular.module('app')
    .service('profileService', function( $http, loginService ){

        this.getGuideReviews = function() {
            return $http.get('api/guideReviews')
        }
        this.postGuideReviews = function() {
            return $http.post('api/guideReviews')
        }    
        
    })
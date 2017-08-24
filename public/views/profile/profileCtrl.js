angular.module('app')
    .controller('profileCtrl', function( $scope, $stateParams, loginService, profileService){

        loginService.getUserById(parseInt($stateParams.id))
        .then(response => {
            $scope.user = response.data[0]
            if ($scope.user.user_id == $stateParams.id) {
                //  We're on our own page
                $scope.user.admin = true
            }
        })

        profileService.getGuideReviews($stateParams.id)
            .then(response => {                
                $scope.guideReviews = response.data

            })
            
        $scope.postGuideReview = function(review){
            var poster_id = loginService.getUser().user_id         
            profileService.postGuideReview(review, $stateParams.id, poster_id)
                .then(res => {                    
                })
            }








        })
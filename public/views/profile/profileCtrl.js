angular.module('app')
    .controller('profileCtrl', function( $scope, $stateParams, loginService, profileService){
        console.log("Hello from profileCtrl")
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
                console.log(response.data)
                $scope.guideReviews = response.data

            })
            
        $scope.postGuideReview = function(review){
            if (review) {
                profileService.postGuideReview(review)
                .then(res => {
                    

                })
            }
        }
        

    })
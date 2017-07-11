angular.module('app')
    .controller('profileCtrl', function( $state, $scope, $stateParams, loginService, profileService){
        console.log("Hello from profileCtrl")
        loginService.getUserById(parseInt($stateParams.id))
        .then(response => {
            console.log(response.data)
            $scope.user = response.data[0]
            if ($scope.user.user_id == $stateParams.id) {
                //  We're on our own page
                $scope.user.admin = true
            }
        })

        // $scope.getGuideReviews = function(guide_id){

        // }

        // $scope.postGuideReview = function(guide_id, rating, review, user_id)        
        

    })
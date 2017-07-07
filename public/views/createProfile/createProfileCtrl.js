angular.module('app')
    .controller('createProfileCtrl', function( $scope, $state, createProfileService, loginService){
    
        $scope.createProfile = function(user){
            createProfileService.createProfile(user)
                .then(function(res){
                    loginService.saveUser(res.data)
                    $state.go('profile')
                })
        }

    })
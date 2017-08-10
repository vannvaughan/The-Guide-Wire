angular.module('app')
    .controller('createProfileCtrl', function( $scope, $state, createProfileService, loginService, $rootScope ){
    
        $scope.createProfile = function(user){
            createProfileService.createProfile(user)
                .then(function(res){
                    console.log(res)
                    loginService.saveUser(res.data)
                    $rootScope.$emit('loggedIn', res.data)
                    $state.go('profile')
                })
        }

    })
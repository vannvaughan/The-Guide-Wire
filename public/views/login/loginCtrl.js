angular.module('app')
    .controller('loginCtrl', function( $scope, $state, loginService ){

        $scope.login = function(user){
            loginService.login(user)
            .then( function(res){
                loginService.saveUser(res.data)
                $state.go('profile')
            })
            .catch( function(res){
                alert("Something went wrong; please try again")
                // TODO: Add fancy modal later
                console.log(res)
            })
        }
        
        

    })

/*
profileService('loginService') (front end)
    $scope.user = loginService.getUser()
*/
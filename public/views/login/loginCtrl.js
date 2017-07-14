angular.module('app')
    .controller('loginCtrl', function( $scope, $state, loginService, $rootScope ){

        $scope.login = function(user){
            loginService.login(user)
            .then( function(res){
                loginService.saveUser(res.data)
                $rootScope.$emit('loggedIn', res.data)
                $state.go('profile', {id: res.data.user_id})
            })
            .catch( function(res){
                alert("Something went wrong; please try again")
                // TODO: Add fancy modal later
                console.log(res)
            })
        }
    })


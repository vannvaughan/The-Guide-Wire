angular.module('app')
    .controller('loginCtrl', function( $scope, $state, loginService){

// var userId = parseInt($stateParams.id);



        $scope.login = function(user){
            loginService.login(user)
            .then( function(res){
                loginService.saveUser(res.data)
                console.log(res.data)
                $state.go('profile', {id: res.data.user_id})
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
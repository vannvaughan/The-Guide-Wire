angular.module('app')
    .controller('profileCtrl', function( $state, $scope, loginService, profileService){
        $scope.user = loginService.getUser()

        

    })
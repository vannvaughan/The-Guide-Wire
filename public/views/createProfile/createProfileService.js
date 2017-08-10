angular.module('app')
    .service('createProfileService', function( $http ){
        
        this.getUsers = function(){
            return $http.get('/api/user')
        }
        
        this.createProfile = function(user){
            console.log("CreateService:", user)
            return $http.post('/api/user', user)
        } 

    })
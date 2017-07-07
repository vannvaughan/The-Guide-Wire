angular.module('app')
    .service('loginService', function( $http ){

        var user;

        this.saveUser = function(newUser){
            user = newUser
        }

        this.getUser = function(){
            return user;
        }

        this.login = function(user){
                return $http.post('/api/login', user)
            }
        
    })
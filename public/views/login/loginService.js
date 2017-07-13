angular.module('app')
    .service('loginService', function( $http){

        var user;

        this.saveUser = function(newUser){
            // Here we save the user so the service remembers who you are
            user = newUser
        }

        this.getUser = function(){
            return user;
        }

        this.login = function(user){
            return $http.post('/api/login',  user)
        }
        
        this.getUserById = function(id) {
            return $http.get('/api/user/' + id)
        }
        
    })
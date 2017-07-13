angular.module('app', ['ui.router', 'ui.materialize'])
    .config(($stateProvider, $urlRouterProvider) => {
        $urlRouterProvider.otherwise('/');

        $stateProvider
        .state('createProfile', {
            url: '/createProfile',
            templateUrl: './views/createProfile/createProfile.html',
            controller: 'createProfileCtrl'
        })
        .state('login', {
            url: '/login',
            templateUrl: './views/login/login.html',
            controller: 'loginCtrl'
        })
        .state('profile', {
            url: '/profile/:id',
            templateUrl: './views/profile/profile.html',
            controller: 'profileCtrl'
        })
        .state('home', {
            url: '/'
            templateUrl: '/views/home/home.html'
            controller: 'homeCtrl'
        })


    })
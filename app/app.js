(function() {
    'use strict';

// Declare app level module which depends on views, and components
    angular.module('myApp', [
        'ngRoute',
        'ngResource',
        'myApp.core',
        'myApp.contact',
        'myApp.customers',
        'myApp.nav',
        'myApp.login'
    ]).
        config(['$routeProvider', function ($routeProvider) {
            $routeProvider.otherwise({redirectTo: '/login'});
        }]);
})();
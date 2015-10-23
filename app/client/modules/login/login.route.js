(function() {
    'use strict';

    angular.module('myApp.login')
        .config(['$routeProvider', function ($routeProvider) {
            $routeProvider.when('/login', {
                templateUrl: 'modules/login/login.html',
                controller: 'LoginCtrl'
            });
        }]);
})();
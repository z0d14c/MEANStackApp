(function() {
    'use strict';

    angular.module('myApp.contact')

        .config(['$routeProvider', function ($routeProvider) {
            $routeProvider.when('/contact', {
                templateUrl: 'contact/contact.html',
                controller: 'ContactCtrl',
                controllerAs: 'contact'
            });
        }]);
})();
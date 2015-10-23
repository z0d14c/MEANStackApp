(function() {
    'use strict';

    angular.module('myApp.contact')

        .config(['$routeProvider', function ($routeProvider) {
            $routeProvider.when('/contact', {
                templateUrl: 'modules/contact/contact.html',
                controller: 'ContactCtrl',
                controllerAs: 'contact'
            });
        }]);
})();
(function() {
    'use strict';

    angular.module('myApp.customers')
        .config(['$routeProvider', function ($routeProvider) {
            $routeProvider.when('/customers/:id', {
                templateUrl: 'customers/customerinfo.html',
                controller: 'CustomerInfoCtrl',
                controllerAs: 'customerinfo'
            });
        }]);

})();
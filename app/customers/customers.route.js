(function() {
    'use strict';

    angular.module('myApp.customers')

        .config(['$routeProvider', function ($routeProvider) {
            $routeProvider.when('/customers', {
                templateUrl: 'customers/customers.html',
                controller: 'CustomersCtrl',
                controllerAs: 'customers'
            });
        }]);
})();
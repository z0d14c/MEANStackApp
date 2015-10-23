(function() {
    'use strict';

    angular.module('myApp.customers')
        .config(['$routeProvider', function ($routeProvider) {
            $routeProvider.when('/customers/:email', {
                templateUrl: 'modules/customers/customerinfo.html',
                controller: 'CustomerInfoCtrl',
                controllerAs: 'customerinfo'
            });
        }]);

})();
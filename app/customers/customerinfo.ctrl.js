(function () {

    'use strict';

    angular.module('myApp.customers')
        .controller('CustomerInfoCtrl', ['$routeParams', 'Customer', function ($routeParams, Customer) {
            var customerinfo = this;

            activate();
            function activate() {
                Customer.getByEmail($routeParams.email).then(function (data) {
                    customerinfo.customer = data;
                });
            }
        }]);
})();
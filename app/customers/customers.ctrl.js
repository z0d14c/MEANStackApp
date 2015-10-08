(function() {
    'use strict';

    angular.module('myApp.customers', ['ngRoute'])
        .controller('CustomersCtrl', ['$location', 'Customer', function ($location, Customer) {
            var customers = this;
            customers.customerList = Customer.query();
            customers.editCustomer = function (id) {
                $location.url('/customers/' + id);
            }
        }]);
})();
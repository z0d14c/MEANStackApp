(function() {
    'use strict';

    angular.module('myApp.customers', ['ngRoute'])
        .controller('CustomersCtrl', ['$location', function ($location) {
            var customers = this;
            var customer = {
                id: 0,
                firstName: 'Joe',
                lastName: 'Bobberson',
                company: 'ESI',
                address: '800 W Campbell Rd',
                city: 'Richardson',
                state: 'TX',
                zip: '75080',
                phone: '8322424304',
                email: 'blargyblarg@blarg.org',
                domain: 'Boss'
            }
            customers.customerList = []
            for (var i = 0; i < 10; i++) {
                var custCopy = angular.copy(customer);
                custCopy.id = i;
                customers.customerList.push(custCopy);
            }
            customers.editCustomer = function (id) {
                $location.url('/customers/' + id);
            }
        }]);
})();
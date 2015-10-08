(function() {

    'use strict';

    angular.module('myApp.customers')
        .controller('CustomerInfoCtrl', ['$scope', function ($scope) {
            var customerinfo = this;
            customerinfo.customer = {
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
        }]);
})();
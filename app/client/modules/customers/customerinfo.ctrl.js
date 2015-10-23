(function () {

    'use strict';

    angular.module('myApp.customers')
        .controller('CustomerInfoCtrl', ['$routeParams', 'Customer', function ($routeParams, Customer) {
            var customerinfo = this;

            customerinfo.update = function() {
              console.log(Customer.update({}, customerinfo.customer));
            };
            activate();
            function activate() {
                Customer.getByEmail($routeParams.email).then(function (data) {
                    customerinfo.customer = data;
                });
            }
        }]);
})();
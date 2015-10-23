(function () {
    'use strict';

    angular.module('myApp.customers')
        .factory('Customer', Customer);

    Customer.$inject = ['$resource'];

    function Customer($resource) {
        var Customer = $resource('/customers/', null, {
            get: {
                method: 'GET'
            },
            query: {
                method: 'GET',
                isArray: true
            },
            update: {
                method: 'PUT'
            }
        });

        return {
            get: Customer.get,
            query: Customer.query,
            update: Customer.update,
            getByEmail: _getByEmail
        };

        function _getByEmail(email) {
            var promise = Customer.query().$promise;
            return promise.then(function (data) {
                var found;
                angular.forEach(data, function (d) {
                    if (d.email === email) {
                        console.log('d', d);
                        found = d;
                    }
                });
                return found;
            });
        }
    }
})();
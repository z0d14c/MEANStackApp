(function() {
    'use strict';

    angular.module('myApp.customers')
        .factory('Customer', Customer);

    Customer.$inject = ['$resource'];

    function Customer($resource) {
        return $resource('http://10.3.1.6:59000/customers.json', null, {
            get: {
                method: 'GET'
            },
            query: {
                method: 'GET',
                isArray: true
            }
        });
    }
})();
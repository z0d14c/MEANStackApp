(function() {
    'use strict';

    angular.module('myApp.login')
        .controller('LoginCtrl', ['$location', function ($location) {
            var login = this;
            login.login = function () {
                $location.url('/customers');
            }
        }]);

})();
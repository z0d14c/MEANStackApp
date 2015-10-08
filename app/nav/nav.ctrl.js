(function() {

    'use strict';

    angular.module('myApp.nav')
        .controller('NavCtrl', ['$location', '$scope', function ($location, $scope) {
            var nav = this;
            nav.changeLocation = function (loc) {
                $location.url('/' + loc);
            };
            nav.logout = function() {
              nav.changeLocation('/login');
            };

        }]);

})();
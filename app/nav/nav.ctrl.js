(function() {

    'use strict';

    angular.module('myApp.nav')
        .controller('NavCtrl', ['$location', '$scope', function ($location, $scope) {
            $scope.changeLocation = function (loc) {
                console.log('loc', loc);
                $location.url('/' + loc);
            }

        }]);

})();
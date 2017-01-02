'use strict';

/**
 * @ngdoc function
 * @name anastasiaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the anastasiaApp
 */
angular.module('anastasiaApp')
  .controller('MainCtrl', ['$scope', '$location', function ($scope, $location) {

  	$scope.location=$location;

    $scope.$watch('location.path()', function(path) {
        var link = $location.path().split('/').slice(1);
        var href = "#";
        link.forEach(function(item) {
            href = href+'/'+item;
            href.concat(href);
        });
        $scope.link = href;
    });

 }]);

'use strict';

/**
 * @ngdoc function
 * @name anastasiaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the anastasiaApp
 */
angular.module('anastasiaApp')
  .controller('NavCtrl', ['$scope', '$location', function ($scope, $location) {

   $scope.navHtml = 'views/navigation.html';

   $scope.location=$location;

   $scope.$watch('location.path()', function(path) {
        var link = $location.path().split('/').slice(1);
        console.log(link);
        var href = "#";
        if (link.length === 2) {
            console.log("here");
            link.splice(-1,1);
            link.forEach(function(item) {
                href = href+'/'+item;
                href.concat(href);
            });
        } else {
            console.log("here2");
            link.forEach(function(item) {
                href = href+'/'+item;
                href.concat(href);
            });
        }
        $scope.link = href;
    });

 }]);

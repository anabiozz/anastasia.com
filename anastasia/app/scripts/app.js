'use strict';

/**
 * @ngdoc overview
 * @name anastasiaApp
 * @description
 * # anastasiaApp
 *
 * Main module of the application.
 */
angular
  .module('anastasiaApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ]).config(function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/app', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/app/gallery', {
        templateUrl: 'views/gallery.html',
        controller: 'GalleryCtrl',
        controllerAs: 'gallery'
      })
      .otherwise({
        redirectTo: '/app'
      });

    $locationProvider.hashPrefix('');

    // //check browser support
    // if(window.history && window.history.pushState){
    //     //$locationProvider.html5Mode(true); will cause an error $location in HTML5 mode requires a  tag to be present! Unless you set baseUrl tag after head tag like so: <head> <base href="/">

    //  // to know more about setting base URL visit: https://docs.angularjs.org/error/$location/nobase

    //  // if you don't wish to set base URL then use this
    //  $locationProvider.html5Mode({
    //          enabled: true,
    //          requireBase: false
    //   });
    // } 
  });

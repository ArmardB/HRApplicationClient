'use strict';

/**
 * @ngdoc overview
<<<<<<< HEAD
 * @name hrappApp
 * @description
 * # hrappApp
=======
 * @name hrappFrontEndApp
 * @description
 * # hrappFrontEndApp
>>>>>>> cdae478b0d00cf92a8e4600bf8a05e8a27016a84
 *
 * Main module of the application.
 */
angular
<<<<<<< HEAD
  .module('hrappApp', [
    'ngAnimate',
    'ngCookies',
=======
  .module('hrappFrontEndApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
>>>>>>> cdae478b0d00cf92a8e4600bf8a05e8a27016a84
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

'use strict';
/* global app:true */ 
/**
 * @ngdoc overview
 * @name angNewsApp
 * @description
 * # angNewsApp
 *
 * Main module of the application.
 */
var app = angular.module('angNewsApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])

app.config(function ($routeProvider) {
  $routeProvider
    // .when('/', {
    //   templateUrl: 'views/main.html',
    //   controller: 'MainCtrl'
    // })
    // .when('/about', {
    //   templateUrl: 'views/about.html',
    //   controller: 'AboutCtrl'
    // })
    .when('/', {
      templateUrl: 'views/post.html',
      controller: 'PostCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
});

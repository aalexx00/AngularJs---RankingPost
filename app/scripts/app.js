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
var app = angular.module('newsappApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'firebase'
]);

app.constant('FIREBASE_URL', 'https://burning-inferno-7689.firebaseio.com/');

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
    .when('/posts/:postId', {
      templateUrl: 'views/showpost.html',
      controller: 'PostViewCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
});

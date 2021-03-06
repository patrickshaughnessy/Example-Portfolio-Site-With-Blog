'use strict';

angular
  .module('app', ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise("/");

    $stateProvider
      .state('home', {
        url: "/",
        templateUrl: "templates/home.html",
        controller: 'homeCtrl'
      })
      .state('portfolio', {
        url: "/portfolio",
        templateUrl: "templates/portfolio.html",
        controller: 'portfolioCtrl'
      })
      .state('about', {
        url: "/about",
        templateUrl: "templates/about.html",
        controller: 'aboutCtrl'
      })
      .state('blog', {
        url: "/blog",
        templateUrl: "templates/blog.html",
        controller: 'blogCtrl'
      });

  })
  .controller('appCtrl', function($scope, $location){
    $scope.isActive = function(url){
      return url === $location.path();
    }
  })

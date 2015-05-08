'use strict';

angular.module('insulinum')
.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/my-insulinum', {
        templateUrl: 'my-insulinum.html',
        controller: 'mainController'
      }).
      when('/', {
        templateUrl: 'landing.html',
        controller: 'loginController'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);

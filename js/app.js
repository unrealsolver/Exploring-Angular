var myApp = angular.module('myApp', [
  'ngRoute',
  'myAppControllers'
]);

myApp.config(['$routeProvider',
  function ($routeProvider) {
    $routeProvider.when('/app', {
      templateUrl: 'partials/item-list.html',
      controller: 'MyAppMainCtrl'
    })
  }
]);

console.log('MyApp', 'load');

angular.module('myApp', [
  'ngRoute',
  'myAppControllers'
]) 
  .config(['$routeProvider', ($routeProvider) ->
    $routeProvider.when('/app', {
      templateUrl: 'partials/item-list.html',
      controller: 'MyAppMainCtrl'
    })
  ])

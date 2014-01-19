angular.module('myAppControllers', [])
  .controller('MyAppMainCtrl', ['$scope', '$http', ($scope, $http) ->
    $http.get('stubs/stubs.json')
      .success (data) -> $scope.items = data
])

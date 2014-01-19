var myAppControllers = angular.module('myAppControllers', []);

myAppControllers.controller('MyAppMainCtrl', ['$scope', '$http',
	function ($scope, $http) {
		$http.get('stubs/stubs.json')
			.success( function (data) $scope.items = data );
}]);

console.log('MyAppControllers', 'load');

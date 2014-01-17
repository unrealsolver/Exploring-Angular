var myApp = angular.module('myApp', []);

myApp.controller('MyAppCtrl', ['$scope', '$http',
	function ($scope, $http) {
		$http.get('stubs/stubs.json')
			.success( function (data) $scope.items = data );
}]);

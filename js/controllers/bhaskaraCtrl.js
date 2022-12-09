angular.module("bhaskara").controller("bhaskaraCtrl", function($scope, $location) {
	$scope.contatos = [];
	$scope.operadoras = [];
	$scope.bhask = {};
	$scope.bhask.valX = [];

	$scope.getDelta = function(a, b, c){
		$scope.bhask.delta = b*b - (4*a*c);
		$scope.bhask.valX[0] = (-b + Math.sqrt($scope.bhask.delta)) / (2 * a);
		$scope.bhask.valX[1] = (-b - Math.sqrt($scope.bhask.delta)) / (2 * a);
		return $scope.bhask.delta;
	}
});
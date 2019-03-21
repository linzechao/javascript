var app = angular.module('app', []);

app.controller('MainCtrl', function($scope) {
	$scope.message = 'Mr. Super!';

	$scope.greet = function() {
		alert('fine!');
		console.info('fine!');
	}
});

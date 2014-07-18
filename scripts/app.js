"use strict";

(function() {
var vhope = angular.module('vhope', ['ngRoute']);

vhope.config(['$routeProvider', function($routeProvider) {

	$routeProvider
		.when('/', {
			templateUrl: '/views/home.html',
			controller: "HomeController"
		})

console.log("App")

}]);



vhope.controller('HomeController', ['$scope', function($scope) {

	console.log("HomeController")

}]);

})();
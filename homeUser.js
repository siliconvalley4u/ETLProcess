var homeUser = angular.module("homeModule", ["ngStorage"]);
	homeUser.controller("homeController", function($scope, $localStorage, $sessionStorage, $window){
		alert("1");
		alert("Full Name is " + sessionStorage.getItem("sessionUser"));
		$scope.userfullName = sessionStorage.getItem("sessionUser");
	}); 
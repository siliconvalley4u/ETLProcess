var registerUser = angular.module("userModule", ["ngStorage"]);
	registerUser.controller("userController", function($scope,$localStorage,$sessionStorage,$window,$timeout){
		$scope.saveUser = function(){
				
			var userVar = $scope.username;
			alert("Username is " + userVar);
			alert("Value is " + localStorage.getItem(userVar));
			if(localStorage.getItem(userVar) != null){
				$scope.registerSuccess=false;
				$scope.registerError=true;
				$scope.registerSignupError="User already exists.";
			}
			else if(localStorage.getItem(userVar) == null){
				$scope.registerError=false;
				$scope.registerSuccess=true;
				$scope.registerSignupSuccess = $scope.username + " successfully registered. Please login.";
				localStorage.firstname = $scope.firstname;
				localStorage.lastname = $scope.lastname;
				localStorage.username = $scope.username;
				localStorage.userpassword = $scope.userpassword;
				localStorage.setItem(localStorage.username, localStorage.firstname + " " + localStorage.lastname);
				localStorage.setItem(localStorage.username + localStorage.userpassword, localStorage.userpassword);
				//$sessionStorage.username = $scope.username;
				//$window.location = "MyApp6.html";
			}
			
		}
		
	});
	

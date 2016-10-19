var registerUser = angular.module("loginModule", ["ngStorage"]);
	registerUser.controller("loginController", function($scope,$localStorage,$sessionStorage,$window,$timeout){
		$scope.loginUserFn = function(){
				
			var lUser = $scope.loginuser;
			if(localStorage.getItem(lUser) != null){
				$scope.loginError=false;
				var lPass = $scope.loginpass;
				if( lPass == localStorage.getItem(lUser + lPass) ){
					alert("Welcome " + localStorage.getItem(lUser));
					sessionStorage.setItem("sessionUser" , localStorage.getItem(lUser));
					$window.location = "MyApp7.html";
				}
				else{
					alert("Incorrect Password.");
				}
			}
			else if( localStorage.getItem(lUser) == null){
				//$scope.registerError=false;
				alert("Inside of else-if statement.");
				$scope.loginError=true;
				$scope.loginSigninError = "User is not registered.";
				//$sessionStorage.username = $scope.username;
				//$window.location = "MyApp6.html";
			}
			
		}
		
	});
	

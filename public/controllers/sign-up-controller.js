var app = angular.module('conductor');

app.controller('SignUpController', function($scope, $http, $state){

	$scope.submit = function(){
		if($scope.password != $scope.passwordRepeated){
			$scope.error = "As Senhas não são iguais!";
		}else{
			$scope.error = "";
			$http({
				method: 'POST',
				url: '/users',
				data: {name: $scope.name, login: $scope.login, email: $scope.email, password: $scope.password}
			
			}).then(function(result){
				if(result.status == 201){
					localStorage.setItem('token', result.data.token );
					$state.go('home');
				}else{
					$scope.error = result.data;
				}
			});
		
		}
		
	}
			alert("O cadastro de usuário está em manutenção!");

});

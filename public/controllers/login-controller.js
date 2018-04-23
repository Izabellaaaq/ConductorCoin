var app = angular.module('conductor')

app.controller('loginController', function($scope, $http, $state, $mdSidenav){

	users = [{nome:'conductor', password:'123'}];
	
	$scope.submit = function()
	{
		var user = $scope.login;
		var pass = $scope.password;
		var exist_user = false;
		for (var i = 0; i < users.length; i++)
		{
			if (user == users[i].nome && pass == users[i].password)
			{
				$state.go('home');
				exist_user = true;
				break;
			}
		}
		
		if (!exist_user)
		{
			$scope.error = "Usuário não cadastrado";
		}
	};
	
});

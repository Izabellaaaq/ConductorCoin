var app = angular.module('conductor', ['ngMaterial', 'ui.router']);

app.config(function($stateProvider){

	$stateProvider.state({ name: 'home', url: '', templateUrl: 'views/home.html', controller: 'HomeController' })

	.state({ name: 'login', url: '/login', templateUrl: 'views/login.html', controller: 'loginController' })

	.state({ name: 'signup', url: '/signup', templateUrl: 'views/sign-up.html', controller: 'SignUpController' })

	.state({ name: 'default', url: '/', controller: function($state) {
		$state.go('home');
	} });


	
});

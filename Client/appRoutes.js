angular.module('superActorQuiz', [
	'superActorQuiz.question', 
	'superActorQuiz.result',
	'ngRoute'
	])
	.config(function($routeProvider, $httpProvider){
		$routeProvider
			.when('/question', {
				templateUrl: 'src/question.html',
				controller: 'questionController'
			})
			.when('/result', {
				templateUrl: 'src/result.html',
				controller: 'resultController'
			})
			.otherwise({
				redirectTo: '/question'
			})
	})
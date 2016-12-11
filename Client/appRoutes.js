angular.module('superActorQuiz', [
	'superActorQuiz.question', 
	'superActorQuiz.result',
	'superActorQuiz.fail',
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
			.when('/fail', {
				templateUrl: 'src/fail.html',
				controller: 'failController'
			})
			.otherwise({
				redirectTo: '/question'
			})
	})
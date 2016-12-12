angular.module('superActorQuiz.question', [])

.controller('questionController', function ($scope, $http, $window) {
	console.log('in questionController')
	$scope.movie1 = 'Legends of the Fall';
	$scope.movie3 = 'Interview with the Vampire';
	$scope.movie4 = 'Mr. and Mrs. Smith'

	$http.get("themoviedb_data.json")
    .then(function (response) {
    	
    	console.log('results',response.data, 'movie', response.data.results[0].original_title);

    	function getRandomInt(min, max) {
  			min = Math.ceil(min);
  			max = Math.floor(max);
  			return Math.floor(Math.random() * (max - min)) + min;
		}


    	$scope.movie1 = response.data.results[getRandomInt(1,6)].original_title;
    	$scope.movie3 = response.data.results[3].original_title;
    	$scope.movie4 = response.data.results[4].original_title;
   //   	$scope.games = response.data.results[0].title.map(function(item) {
  	// 		console.log(item)
  	// 		return item;
		 // });

	})
})
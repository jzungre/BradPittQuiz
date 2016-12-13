angular.module('superActorQuiz.question', [])

.controller('questionController', function ($scope, $http, $window) {
	console.log('in questionController')
	$scope.movie1 = 'Legends of the Fall';
	$scope.movie3 = 'Interview with the Vampire';
	$scope.movie4 = 'Mr. and Mrs. Smith';
	$scope.actor;

	$http.get("themoviedb_data.json")
    .then(function (response) {
    	
    	console.log('results',response.data, 'movie', response.data.results[0].original_title);

    	function getRandomInt(min, max) {
  			min = Math.ceil(min);
  			max = Math.floor(max);
  			return Math.floor(Math.random() * (max - min)) + min;
		}

		// if we wanted to randomize the quiz for replayability we could use this:
		// $scope.movie1 = response.data.results[getRandomInt(1,6)].original_title;
		$scope.object = {};
    	$scope.movie1 = response.data.results[1].original_title;
    	$scope.movie3 = response.data.results[3].original_title;
    	$scope.movie4 = response.data.results[4].original_title;

    	$scope.films;
	})

    $scope.search = function(){
    	console.log('ACTOR:',$scope.actor);
    	$scope.object.actor = $scope.actor;
    	
    	var sendableActor = JSON.stringify($scope.object);
    	console.log('stringifiedActor', sendableActor)

    	$http({
		     'method': 'POST',
		     'url': '/stars',
		     'Content-Type': 'application/json',
		     'data': sendableActor
		})
		   .then(function(response) {
		    //after the the information is successfully posted to the database,
		    //reload the home page
		     console.log('user information submitted successfully', response);

		     $scope.films = response.data;

		   })
		   .catch(function() {
		    // or console log that the information was not successfully sent and received
		     console.log('user information not submitted');
		   });

		    }

})
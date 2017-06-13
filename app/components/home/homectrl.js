angular.module('EmeraldApp')

	.controller('HomeCtrl', ['$scope', '$location', function($scope, $location){
		

		//Logic for tabs https://codepen.io/jasoncluck/pen/iDcbh

		$scope.tab = 1;

	    $scope.setTab = function(newTab){
	      $scope.tab = newTab;
	    };

	    $scope.isSet = function(tabNum){
	      return $scope.tab === tabNum;
	    };


	    // go to specified id on a page
	    
	    $scope.goTo= function(id){
	    	$location.url(id);
	    };
		
  	}]);
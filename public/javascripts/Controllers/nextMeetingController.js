var app = angular.module('myApp');

app.controller('nextMeetingController', function($scope,ConnectionService) {
  $scope.dataHolder = {};
  
  var data = JSON.stringify({
                    "username":"testuser5"
                    }); 
	ConnectionService.postRequest('nextMeeting',data).then(function(data){
	  $scope.dataHolder = data;
	});
});
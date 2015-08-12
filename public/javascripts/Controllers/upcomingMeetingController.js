var app = angular.module('myApp');

app.controller('upcomingMeetingController', function($scope,ConnectionService) {
  $scope.dataHolder = {};
  
  ConnectionService.getRequest('upcomingMeeting').then(function(data){
      $scope.dataHolder = data;
    });
});
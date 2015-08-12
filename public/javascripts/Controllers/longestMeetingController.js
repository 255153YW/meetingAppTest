var app = angular.module('myApp');

app.controller('longestMeetingController', function($scope,ConnectionService) {
  $scope.dataHolder = {};
  
  ConnectionService.getRequest('longestMeeting').then(function(data){
      $scope.dataHolder = data;
    });
});
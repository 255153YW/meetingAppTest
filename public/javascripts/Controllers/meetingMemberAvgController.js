var app = angular.module('myApp');

app.controller('meetingMemberAvgController', function($scope,ConnectionService) {
  $scope.dataHolder = {};
  
  ConnectionService.getRequest('meetingMemberAvg').then(function(data){
      $scope.dataHolder = data;
    });
});
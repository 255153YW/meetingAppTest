var app = angular.module('myApp');

app.controller('meetingCountController', function($scope,ConnectionService) {
  $scope.dataHolder = {};
  
  ConnectionService.getRequest('meetingCount').then(function(data){
      $scope.dataHolder = data;
    });
});
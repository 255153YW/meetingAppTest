var app = angular.module('myApp');

app.controller('generateDataController', function($scope,ConnectionService) {
  $scope.dataHolder = {};
  
  ConnectionService.getRequest('generateData').then(function(data){
      $scope.dataHolder = data;
    });
});
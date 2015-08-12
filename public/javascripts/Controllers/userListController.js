var app = angular.module('myApp');

app.controller('userListController', function($scope,ConnectionService) {
  $scope.dataHolder = [];
  
  ConnectionService.getRequest('userlist').then(function(data){
  		for (i = 0; i < data.length; i++) {
		    $scope.dataHolder.push(data[i]);
		}
    });
});
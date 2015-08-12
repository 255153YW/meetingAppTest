var app = angular.module('myApp');

app.factory('ConnectionService', [ '$http', function($http){

   var connService = {};

   connService.getRequest = function(type){
    var fullURL = 'http://localhost:3000/users/' + type;
    var req = {
          method: 'GET',
          url: fullURL,
          contentType: "application/json; charset=utf-8",
          dataType: "json"
          }
     return $http(req).then(function(res){
       return res.data;
     },function(error){
       console.log(error);
       return [];
     });
   }

   connService.postRequest = function(type, data){
    var fullURL = 'http://localhost:3000/users/' + type;
    var req = {
          method: 'POST',
          url: fullURL,
          contentType: "application/json; charset=utf-8",
          data:data,
          dataType: "json"
          }
     return $http(req).then(function(res){
       return res.data;
     },function(error){
       console.log(error);
       return [];
     });
   }

   return connService;
}]); 


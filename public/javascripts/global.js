var app = angular.module('myApp', []);

   
app.controller('myCtrl', function($scope,ConnectionService) {
  $scope.dataHolder = {};

  $scope.processList = ['home', 'getUserList', 'generateData','meetingCount',
  'upcomingMeeting', 'meetingMemberAvg','nextMeeting', 'longestMeeting'];

  $scope.currentProcess = $scope.processList[0];

  $scope.getUserlistClick = function() {
      //alert("userlist is clicked");
      $scope.currentProcess = $scope.processList[1];
  };

  $scope.generateDataClick = function() {
    
    $scope.currentProcess = $scope.processList[2];
  };

  $scope.meetingCountClick = function() {
    
    $scope.currentProcess = $scope.processList[3];
  };

  $scope.upcomingMeetingClick = function() {
    
    $scope.currentProcess = $scope.processList[4];
  };

  $scope.meetingMemberAvgClick = function() {
    
    $scope.currentProcess = $scope.processList[5];
  };

  $scope.nextMeetingClick = function() {
    
    $scope.currentProcess = $scope.processList[6];
  };

  $scope.longestMeetingClick = function() {
    
    $scope.currentProcess = $scope.processList[7];
  };
  
  $scope.go = function() {
    alert('clicked');
    }
});
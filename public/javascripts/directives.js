var app = angular.module('myApp');

app.directive("getUserList", function() {
  return {
    restrict: "E",
    templateUrl: 'partials/userList',
    controller: "userListController"
    };
});
app.directive("generateData", function() {
  return {
    restrict: "E",
    templateUrl: 'partials/generateData',
    controller: "generateDataController"
    };
});
app.directive("meetingCount", function() {
  return {
    restrict: "E",
    templateUrl: 'partials/meetingCount',
    controller: "meetingCountController"
    };
});
app.directive("upcomingMeeting", function() {
  return {
    restrict: "E",
    templateUrl: 'partials/upcomingMeeting',
    controller: "upcomingMeetingController"
    };
});
app.directive("meetingMemberAvg", function() {
  return {
    restrict: "E",
    templateUrl: 'partials/meetingMemberAvg',
    controller: "meetingMemberAvgController"
    };
});
app.directive("nextMeeting", function() {
  return {
    restrict: "E",
    templateUrl: 'partials/nextMeeting',
    controller: "nextMeetingController"
    };
});
app.directive("longestMeeting", function() {
  return {
    restrict: "E",
    templateUrl: 'partials/longestMeeting',
    controller: "longestMeetingController"
    };
});
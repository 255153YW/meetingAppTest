var express = require('express');
var router = express.Router();

/*
 * GET userlist.
 */
router.get('/userList', function(req, res) {
  res.render('partials/userList');
});
router.get('/generateData', function(req, res) {
  res.render('partials/generateData');
});
router.get('/meetingCount', function(req, res) {
  res.render('partials/meetingCount');
});
router.get('/upcomingMeeting', function(req, res) {
  res.render('partials/upcomingMeeting');
});
router.get('/meetingMemberAvg', function(req, res) {
  res.render('partials/meetingMemberAvg');
});
router.get('/nextMeeting', function(req, res) {
  res.render('partials/nextMeeting');
});
router.get('/longestMeeting', function(req, res) {
  res.render('partials/longestMeeting');
});

module.exports = router;

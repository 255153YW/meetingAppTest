var express = require('express');
var query = require("../Service/queryService.js");
var router = express.Router();


/*
 * GET userlist.
 */
router.get('/userlist', function(req, res) {
    query.getUserList(req,res);
});


/*
 * bulk insert random 5000 files
 */
router.get('/generateData', function(req, res) {
    query.generateData(req,res);
});

/*
 * GET amount of meetings
 */
router.get('/meetingCount', function(req, res) {
    query.meetingCount(req,res);
});

/*
 * GET upcoming meeting
 */
router.get('/upcomingMeeting', function(req, res) {
    query.upcomingMeeting(req, res);
});


/*
 * GET average amount of people in a meeting
 */
router.get('/meetingMemberAvg', function(req, res) {
    query.meetingMemberAvg(req,res);
});

/*
 * GET next meeting for each person
 */
router.post('/nextMeeting', function(req, res) {
     query.nextMeeting(req,res);
 });

/*
 * GET longest meeting
 */
router.get('/longestMeeting', function(req, res) {
    query.longestMeeting(req,res);
});

module.exports = router;

// app.post('/', function (req, res) {
//   console.log(req.body);
//   res.json(req.body);
// })
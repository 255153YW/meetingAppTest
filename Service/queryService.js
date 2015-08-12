var randomGen = require("../Service/randomGenService.js");
module.exports = {
	getUserList : function(req,res){
		var db = req.db;
		var collection = db.get('people');
		collection.find({},{},function(e,docs){
		    res.json(docs);
		});
	},
	generateData : function(req,res){
		var db = req.db;
	    var people = db.get('people');
	    var meeting = db.get('meeting');
	    var currentTime = Date.now();
	    var peopleList = [];
	    var counter = 0;
	    var query = {};

	    var randomStartDate = 0;
	    var randomEndDate = 0;
	    var randomMember = [];


	    //get list of people
	    people.find({},{},function(e,docs){
	        for(var i = 0; i<docs.length;i++)
	        {
	            peopleList.push(docs[i]._id);   
	        }

	        // console.log(peopleList);
	        // res.json(docs);

	        //bulk insert
	        var bulk = meeting.col.initializeUnorderedBulkOp();
	        for(var i = 0; i<3;i++)
	        {
	            randomStartDate = randomGen.randomStartDate(currentTime);
	            randomEndDate = randomGen.randomEndDate(randomStartDate);
	            randomMember = randomGen.randomMember(peopleList);

	            query = {topic:"Random Meeting", startTime: new Date(randomStartDate), endTime:new Date(randomEndDate), member:randomMember};
	            bulk.insert(query,function(e,docs){
	            	//console.log(e);
	            	//res.json(docs);
	            });    
	        }
	        res.json("bulk operation finished");
	        // bulk.execute( { w: "majority", wtimeout: 5000 },
	        // 	function(e,docs){
	        // 		console.log(e);
	        // 		res.json(docs);
	        // });
	    });
	},
	meetingCount : function(req,res){
		var db = req.db;
	    var collection = db.get('meeting');
	    collection.count({},function(e,docs){
	        res.json(docs);
	    });
	},
	upcomingMeeting : function(req,res){
		var db = req.db;
	    var collection = db.get('meeting');
	    var currentTime = Date.now();
	    collection.find({"startTime" : { $gt : new Date(currentTime) }},{limit : 5},function(e,docs){
	        res.json(docs);
	    });
	},
	meetingMemberAvg : function(req,res){
		var db = req.db;
	    var collection = db.get('meeting');
	    var currentTime = Date.now();

	    collection.col.aggregate([
	    { $limit : 20 },
	    {$match: {"startTime" : { $gt : new Date(currentTime) }}}, 
	    {$group:
	    		{	
	    			_id:null,
	    			avgmember:{$avg:{$size:"$member"}}
	    		}

	    }],function(e,docs){
	        res.json(docs);
	    });
	},
	nextMeeting : function(req,res){
		var db = req.db;
		var collection = db.get('people');
		var username = req.body.username;
		var currentTime = Date.now();

		var query = {"username": username};

		// console.log(username);
		// console.log(query);
		// collection.find(query,{},function(e,docs){
		//     res.json(docs);
		// });	
		db.get('people').find(query,{},
			function(e,docs){
				var query = {"member": docs[0]._id};


			    db.get('meeting').findOne(query,{"startTime" : { $gt : new Date(currentTime) }},
			    	function(e,docs){
			    		res.json(docs);	
			    	});
		});	

		//some experiment
		// var peopleMeeting = [];

		//  //get list of people
	 //    db.get('people').find({},{},function(e,docs){
	 //    	var temp = docs.length;
	 //        for(var i = 0; i<docs.length;i++)
	 //        {
	 //            var query = {"member": docs[i]._id}; 
	 //            //console.log(query);
	 //            db.get('meeting').findOne(query,{"startTime" : { $gt : new Date(currentTime) }},
		// 	    	function(e,docs2){
		// 	    		//console.log(docs2);
		// 	    		peopleMeeting.push(docs2); 

		// 	    		if(i == (temp-1)){
		// 	    			console.log(peopleMeeting);
		// 	            	res.json(peopleMeeting);
		// 	            }
		// 	    	});
	 //        }	        
	 //    });	

		
	},
	longestMeeting : function(req,res){
		var db = req.db;
	    var collection = db.get('meeting');

	    collection.col.aggregate([{
	    	$group:
	    		{	
	    			_id:null,
	    			longestMeeting:{$max:{$subtract:["$endTime","$startTime"]}}
	    		}

	    }],function(e,docs){
	        res.json(docs);
	    });
	}
};
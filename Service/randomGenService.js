module.exports = {
	randomStartDate : function(currentDate){
		//random int from currentdate to 2*currentDate
		var startDate = Math.floor(Math.random() * ((2*currentDate)-currentDate+1)) + currentDate;
		return startDate;

	},
	randomEndDate : function(startDate){
		//random int from currentdate to startDate + 8hours (28.800.000 miliseconds)
		var endDate = Math.floor(Math.random() * ((28800000+startDate)-startDate+1)) + startDate;
		return endDate;	
	},
	randomMember : function(peopleList){
		var peopleListLength = peopleList.length;
		var peopleListSelector = 0;
		var randomListSize = Math.floor(Math.random()*10)+1;
		var randomList = [];

		for(var i = 0; i<randomListSize; i++){
			//keep generating random integer until an element that is not yet existed in randomList found
			 while (randomList.indexOf(peopleList[peopleListSelector]) > -1) {
			    //select random people from the peopleList and push it to the new randomList
			 	peopleListSelector = Math.floor(Math.random()*peopleListLength);
			}
			randomList.push(peopleList[peopleListSelector]);   
		}

		return randomList;
	}

};
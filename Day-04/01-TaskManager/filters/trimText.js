angular.module("taskApp").filter("trimText", function(){
		return function(data, lengthLimit){
			data = data || "";
			return data.length > lengthLimit ? data.substr(0,lengthLimit) + "..." : data;
		}
	});

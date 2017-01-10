var http 	= require('http'),
	urlLibrary  = require('url'),
	helper = require('./helper')
const PORT = 3000;

// All tasks names are added in a array
const fileNames = ["task1", "task2", "task3", "task4"];
// check added either the argument(filename) exist in array or not
var getTaskName = (process.argv[2] && (fileNames.indexOf(process.argv[2])> -1)) ? process.argv[2] : 'task1';
// require that file
var requireTask = require('./' + getTaskName)

//Create  server
var server = http.createServer(function(request, response){

var url = urlLibrary.parse(request.url, true)
	
	// check the URL
	if ( /\/I\/want\/title\/?$/.test(url.pathname) ){
		// get all params
		var getAddressArray = (url['query'] && url['query']['address']) ? url['query']['address'] : '';
		if ( !getAddressArray ) 
			return helper.pageNotFound(response)
		// if param is not object
		if ( typeof getAddressArray === 'string' )  
			getAddressArray = new Array(getAddressArray)

		new requireTask(request,response).getTitle(getAddressArray);
	}
	else{
		helper.pageNotFound(response)		
	}	
});
// Run server
server.listen(PORT,function(){
	console.log("server is listening on: http://localhost:"+PORT);
});
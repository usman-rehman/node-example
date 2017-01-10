
// Return CompleteHTML with header and footer
exports.getCompleteHTML = function (arrayOfObjects){
	var completeHtml = exports.getHeader()
	for ( var i = 0 ; i < arrayOfObjects.length ; ++i){
		completeHtml += exports.getSingleTitle(arrayOfObjects[i])
	}
  	completeHtml += exports.getFooter();
  	return completeHtml;
},

// get only title with url from param array
exports.getSingleTitle = function (obj){
	return '<li> ' + obj[0] + ' - ' + obj[1] + ' </li>' 
}

// get header of HTML
exports.getHeader = function (){
	return '<html><head></head><body><h1> Following are the titles of given websites: </h1><ul>'
},

// get footer of HTML
exports.getFooter = function (){
	return '</ul></body></html>'
}
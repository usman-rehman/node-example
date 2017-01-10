var request   = require('request'),
	cheerio = require('cheerio');
const noResponse = 'NO RESPONSE';
const notFound = "404 Not Found";
exports.getTitle = function(url,callback){
	
	// add http in url if don't exist
	var urlWithHttp = !/^(?:f|ht)tps?\:\/\//.test(url) ? 'http://' + url : url
	
	request.get(urlWithHttp ,function(error, response, body) {
		if (error) 
			return callback(null, [url, noResponse])

		if ( !error && response.statusCode == 200 ){ 
			var $ = cheerio.load(body);
		    var title = $("title").text();
		}
	  callback(null, ['"' + url+ '"','"' + title + '"'])
	})
}

exports.pageNotFound = function(response){
	response.writeHead(404, {"Content-Type": "text/plain"});
	response.write(notFound);
	response.end();
}
var view = require('./view'),
	helper = require('./helper'),
	RSVP = require('rsvp')
	const noResponse = 'NO RESPONSE';

module.exports = function(req,res){
	return {
		getTitle: function(urls){
			res.write(view.getHeader())

			var promises = urls.map(function(url){ 
				return getTitleString(url) 
			})
			RSVP.all(promises).then(function(posts) {
			  // posts contains an array of results for the given promises
				res.write(view.getFooter())
				res.end('fdsfd');
			}).catch(function(error){
				res.end('Internal Server Error.')
			})

		}
	}

	function getTitleString(url){

		var promise = new RSVP.Promise(function(resolve, reject) {
			  // succeed
			helper.getTitle(url,function(error,response){
		  		res.write(view.getSingleTitle(response))
		  		if (this.status === 200){
		  			promise.resolve(response)
		  		}
		  	})
		});
		return promise;
	}
}
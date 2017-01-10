var view = require('./view'),
	helper = require('./helper'),
	bacon = require('baconjs')

module.exports = function(req,res){
	return {
		getTitle: function(urls){
			var streams = urls.map(function(url){ 
				return bacon.fromNodeCallback(helper.getTitle,url) 
			})

			// Merge all the bacon callbacks
			var stream = bacon.mergeAll(streams)
			res.write(view.getHeader())
			
			// get the title and url
			stream.onValue(function(val){ 
				res.write(view.getSingleTitle(val)) 
			})

			// the function will be called when the stream ends
			stream.onEnd(function(){ 
				res.write(view.getFooter()) 
				res.end()
			})
		}
	}
}
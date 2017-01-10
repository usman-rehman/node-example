var view = require('./view'),
	async = require('async'),
	helper = require('./helper')

module.exports = function(req,res){
	return {
		getTitle: function(urls){
			async.map(urls,function(url, callback){
				helper.getTitle(url, callback)
			},function(error, result){
				res.write(view.getCompleteHTML(result))
				res.end();
			})
		}
	}
}
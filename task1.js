var view = require('./view')
	helper = require('./helper')

module.exports = function(req,res){
	return {
		getTitle: function(urls){

			var numberOfURL = 0, urlCount = urls.length;
			res.write(view.getHeader())
			urls.forEach(function(url,index){
				helper.getTitle(url,function(err, result){
					res.write(view.getSingleTitle(result))
					numberOfURL++
					if ( numberOfURL == urlCount ){ 
						res.write(view.getFooter())
						res.end();
					}
				})
			})

		}
	}
}
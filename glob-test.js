var glob = require("glob");
var async = require('async');
// do scrape
glob("websites/**/scrape.js", null, function (er, files) {
  	var parallel = [];
  	files.forEach(function(file) {
  		var website = file.match(/\/.*(?=\/)/)[0].replace(/\/*/, '');
  		parallel.push(function(callback) {
  			callback(null, {
  				website: website
  			})
  		});
  	});
  	
  	async.parallel(output,
	// optional callback
	function(err, results){
	    // the results array will equal ['one','two'] even though
	    // the second function had a shorter timeout.
	    
	});


});
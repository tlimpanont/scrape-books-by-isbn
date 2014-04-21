var express = require('express');
var app = express();
var spawn = require('child_process').spawn;
var async = require('async');
var glob = require("glob");


var server = app.listen(3000, function() {
	console.log('Listening on port %d', server.address().port);
});

var Factory = {};
Factory.parallelForScraping = function(files, req) {
    var output = [];

    files.forEach(function(file) {
        var website = file.match(/\/.*(?=\/)/)[0].replace(/\/*/, '');

        output.push(function(callback) {
            
            var child = spawn('casperjs', [file, req.params.ISBN] );
            
            child.stdout.on('data', function (data) {
                var json = JSON.stringify(data.toString().slice(0, -1));
                
                callback(null, {
                    website: website,
                    data: JSON.parse(data.toString())
                })
            });   
        });

    });
    return output;
}

app.get('/books/:ISBN', function(req, res){
    glob("websites/**/scrape.js", null, function (er, files) {
        async.parallel(Factory.parallelForScraping(files, req),
        function(err, results){
            res.send(results);
        });
    });
});


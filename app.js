var http = require('http');
var path = require('path');
var fs = require('fs');
//var mime = require('mime');
var express = require('express');
var app = express();

app.set('port', process.env.OPENSHIFT_NODEJS_PORT || 8080);
app.set('ip', process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1');

http.createServer(app).listen(app.get('port'), app.get('ip'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

app.get('/', function (req, res) {
  res.send('Nothing to see here!');
});

app.get('/geospatial', function(req, res){

  var file = __dirname + '/geospatial.xml';
  res.setHeader('Content-type', 'application/rss+xml');
  res.sendfile(file);
/*  var filename = path.basename(file);
  //var mimetype = mime.lookup(file);

  res.setHeader('Content-disposition', 'attachment; filename=' + filename);
  res.setHeader('Content-type', 'application/rss+xml');

  var filestream = fs.createReadStream(file);
  filestream.pipe(res);*/
});
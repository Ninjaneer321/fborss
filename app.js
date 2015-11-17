var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.set('port', process.env.OPENSHIFT_NODEJS_PORT); 
app.set('ipaddr', process.env.OPENSHIFT_NODEJS_IP);
//app.listen();
var server = app.listen(app.port, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
var express = require('express');
var app = express();

app.use('/static', express.static('dist'));
app.use('/asset', express.static('dist/asset'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.listen(80, function () {
  console.log('server is running');
});

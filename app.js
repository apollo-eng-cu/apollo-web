var express = require('express');
var bodyParser = require('body-parser');
var querystring = require('querystring');
var request = require('request');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true, type: 'application/x-www-form-urlencoded' }));

app.use('/static', express.static('dist'));
app.use('/asset', express.static('dist/asset'));

app.set('port', (process.env.PORT || 5000));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.post('/form', function(req, res) {
  submitGoogleForm(req.body, function(err, httpRes, body) {
    if(/เราได้บันทึกคำตอบของคุณไว้แล้ว/.test(body)) {
      res.status(200).send();
    } else {
      res.status(500).send();
    }
  });
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


function submitGoogleForm(data, callback) {
  var formId = '1FAIpQLSfR4AXvzNWS4f9wm8J5xjWmSVcgp0Q1emRAsh8Ceb_KWJ4Dkw';
  var dest = 'https://docs.google.com/forms/d/e/' + formId + '/formResponse';

  request.post({ url: dest, form: data}, callback);
}

var bodyParser = require('body-parser');
var express = require('express');

var app = express();
app.use(express.static(__dirname + '/public'));
//app.use(bodyParser.urlencoded({ extended: false }));
//app.use(bodyParser.json());

//require('./routes/routes')(app);

app.listen(8080);

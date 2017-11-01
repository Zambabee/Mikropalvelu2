var express = require('express');
var phonelocation = require('./routes/phonelocation');
var app = express();

var ip = '0.0.0.0';
var port = 31313;

app.use('/api/PhoneLocations', phonelocation);

app.listen(port, ip);
console.log('microservice started at %s:%s',ip,port);
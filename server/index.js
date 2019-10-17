'use strict';
require('dotenv').load();
const express = require('express');
var cors = require('cors');
const analyzeSentiment = require('./sentiment-analysis');

var http = require('http');

// Create Express webapp.
var app = express();
app.use(cors());

var bodyParser = require('body-parser');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.get('/sentiment-analysis', async function(request, response) {
  let result = await analyzeSentiment(request.query.message);
  response.send(result);
});

// Create http server and run it.
var server = http.createServer(app);
var port = process.env.PORT || 3000;
server.listen(port, function() {
  console.log('Express server running on *:' + port);
});

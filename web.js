/**
 * Dependencies
 */

var express = require('express');
var routes = require('./routes');

/**
 * Make app
 */

var app = express();

/**
 * Configure
 */

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.logger());
app.use(express.bodyParser());

/**
 * Routes
 */

app.get("/", routes.index);

/**
 * Listen
 */

var port = process.env.PORT || 8080;
app.listen(port, function() {
    console.log("Listening on " + port);
});

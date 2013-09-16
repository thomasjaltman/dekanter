var express = require('express');
var app = express();
app.use(express.logger());

app.get("/", function(req, res) {
    res.send("Hello World!");
});

var port = process.env.PORT || 8888;
app.listen(port, function() {
    console.log("Listening on " + port);
});

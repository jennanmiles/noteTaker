// Require express dependency 
var express = require('express');

// creating an express server
let app = express();

// initial port
let PORT = process.env.PORT || 8080;

// express handling data parsing
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// routes
require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);

// listener
app.listen(PORT, function () {
    console.log('app is listening on port ' + PORT);
});
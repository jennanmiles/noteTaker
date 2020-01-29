// include path package 
let path = require('path');

// routing
module.exports = function(app) {
    // html get requests
    app.get('/', function(req,res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

    app.get('/notes', function(req,res) {
        res.sendFile(path.join(__dirname, "../public/notes.html"));
    });

    // default to home 
    app.get('*', function(req,res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });
}
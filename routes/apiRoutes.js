// load data
let data = require('../db/db');

// routing
module.exports = function(app) {
    // api requests
    app.post('/db', function(req,res){
        if (data.length > 0) {
            data.push(req.body);
            res.json(true);
        } else {
            console.log('something is wrong');
        }
    });
}
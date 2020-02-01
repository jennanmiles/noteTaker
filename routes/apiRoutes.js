// load data
let path = require('path');
let fs = require('fs');
// increment var
let num = 2;

// routing
module.exports = function(app) {
    // api requests

    // need a get
    app.get('/api/notes', function(req,res) {
        console.log('hit');

        fs.readFile(path.join(__dirname, '../db/db.json'), function(error,data) {
            if (error) {
                return console.log(error);
            }
            data = JSON.parse(data);
            res.send(data);
        });
    });
    
    app.post('/api/notes', function(req,res){
        let newNote = req.body;
        console.log('post req?');

        fs.readFile(path.join(__dirname, '../db/db.json'), function(error,data) {
            if (error) {
                return console.log(error);
            }
            data = JSON.parse(data);
            newNote.id = num;
            num++;
            data.push(newNote);

            fs.writeFile(path.join(__dirname, '../db/db.json'), JSON.stringify(data), function(error) {
                if (error) {
                    console.log(error);
                } 
                res.send(data);
            });            
        });
    });

    app.delete('/api/notes/:delete', function(req,res) {
        let deleted = req.params.delete;

        fs.readFile(path.join(__dirname, '../db/db.json'), function(error,data) {
            if (error) {
                return console.log(error);
            }
            data = JSON.parse(data);
            data = data.filter(function(arr){
                return arr.id != deleted;
            });
            
            fs.writeFile(path.join(__dirname, '../db/db.json'), JSON.stringify(data), function(error) {
                if (error) {
                    console.log(error);
                } 
                res.send(data);
            }); 
        });  
    });
}
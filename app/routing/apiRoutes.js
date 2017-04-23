//A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
//LOAD DATA
var idolData = require("../data/friends");
 module.exports = function(app) {

     app.get("/api/friends", function(req, res) {
         res.json(idolData);
     });
//A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
    app.post("/api/friends", function(req, res) {
        if (idols.length ) {
            idolData.push(req.body);
            res.json(name,photo);
        }
    });
     
 };
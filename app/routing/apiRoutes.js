//A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
//LOAD DATA
var idols = require("../data/friends");
 module.exports = function(app) {

     app.get("/api/friends", function(req, res) {
         res.json(idols);
     });
//A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
    app.post("/api/friends", function(req, res) {
      //I need a for loop
      var idolShip = {
          name: "",
          photo: "",
          diffScore: 1000
      };
      var fanData = req.body;
      var fanScore = fanData.score;

      var totalDiff = 0;

      for (var i = 0; i < idols.length; i++) {
          console.log(idols[i].name);
          totalDiff = 0;

          //looping through each question score(value)
          for (var x = 0; x < idols[i].score[x]; x++){
              totalDiff += Math.abs(parseInt(fanScore[x]) - parseInt(idols[i].score[x]));
          }
      }
      //
      if (totalDiff <= idolShip.diffScore) {
        idolShip.name = idols[i].name;
        idolShip.photo = idols[i].photo;
        idolShip.diffScore = totaldiff;
      }

       idols.push(fanData);
       res.json(idolShip);
    });
    
 };
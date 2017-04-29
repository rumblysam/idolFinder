//Include a GET Route to /survey which should display the survey page.
var path = require("path");
//ROUTING
module.exports = function(app){

    app.get("/home", function(req, res) {
        console.log("getting /home");
        res.sendFile(path.join(__dirname, "/../public/home.html"));
        
    });
    app.get("/survey", function(req, res) {
        console.log("getting /survey");
        res.sendFile(path.join(__dirname, "/../public/survey.html"));
    });

//Include a default USE route that leads to home.html which displays the home page
    app.use(function(req, res) {
        res.sendFile(path.join(__dirname, "/../public/home.html"));
    });
};
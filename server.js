//Dependencies
var express = require("express");
var bodyParser = require("body-parser");

//server-y things
var app = express();
var PORT = process.env.PORT || 3000;

//BodyParser-y things
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json"}));

//Routing
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

//listener
app.listen(PORT, function(){
    console.log("App listening on PORT: " + PORT);
});
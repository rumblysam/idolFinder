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
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var app = express();
var PORT = 3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

var characters = [
  {
    name:"Ahmed",
    photo:"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
    scores:[
        5,
        1,
        4,
        4,
        5,
        1,
        2,
        5,
        4,
        1
        ]
    },
];


app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/survey", function(req, res) {
  res.sendFile(path.join(__dirname, "survey.html"));
});

app.get("/api/characters/:character", function(req, res) {
  var chosen = req.params.character;
  console.log(chosen);
  for (var i = 0; i < Response.length; i++) {
    if (chosen === response[i].routeName) {
      return res.json(characters[i]);
    }
  }
  return res.json(false);
});

app.post("/survey/: name", function(req, res) {

  var newName = req.body;

  // Using a RegEx Pattern to remove spaces from newCharacter
  // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
  newName.routeName = newcharacter.name.replace(/\s+/g, "").toLowerCase();

  console.log(newName);

  characters.push(newName);

  res.json(newName);
});


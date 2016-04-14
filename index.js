var express   = require("express");
var mongoose  = require("./db/connection");
var app       = express();

var Thing     = mongoose.model("Thing");

app.get("/", function(req, res){
  Thing.find().then(function(response){
    res.json(response);
  });
});

app.listen(3002, function(){
  console.log("The server is alive! :)");
});

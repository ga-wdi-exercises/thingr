var express   = require("express");
var hbs       = require("express-handlebars");
var mongoose  = require("./db/connection");
var app       = express();

var Thing     = mongoose.model("Thing");

app.set("view engine", "hbs");
app.engine(".hbs", hbs({
  extname:        ".hbs",
  partialsDir:    "views/",
  layoutsDir:     "views/",
  defaultLayout:  "layout-main"
}));
app.get("/", function(req, res){
  Thing.find().then(function(response){
    res.render("things-index", {
      things: response
    });
  });
});

app.listen(3002, function(){
  console.log("The server is alive! :)");
});

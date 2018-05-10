var express = require("express");
var app = express();

app.get("/", function(req, res){
res.redirect('back');
});
app.get("/name", function(req, res){
   res.send("<h1>Hello world name</h1>");
});
app.get("/name/:name", function(req, res){
   var name = req.params.name;
   res.send("<h1>Hello " + name +"</h1>");
});
app.get("/google", function(req, res){
   var google = req.params.google;
res.redirect('http://google.com');
});
app.get("/google/:search", function(req, res){
   var google = req.params.google;
res.redirect('http://google.com/search?q={search value}');
});

app.get("/*", function(req, res){
res.send("404 error");
});
app.listen(3000, function(){
   console.log("Example is running on port 3000");
});

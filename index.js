var express = require("express");
var app = express();

app.get("/", function (reg, res) {
  res.send("Hello Aakash and Aman, How are You!");
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log("App is listening at http://%s:%s", host, port);
});

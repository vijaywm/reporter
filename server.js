const express = require("express");
const bodyParser = require("body-parser");
const nunjucks = require("nunjucks");
const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

nunjucks.configure("views", {
  autoescape: true,
  express: app
});

app.get("/", function(req, res) {
  res.render("index.html");
});

app.listen(3000, function() {
  console.log("reporting on port 3000!");
});

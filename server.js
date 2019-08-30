const express = require("express");
const bodyParser = require("body-parser");
const nunjucks = require("nunjucks");
const app = express();

const columnDefs = [
  { headerName: "Make", field: "make" },
  { headerName: "Model", field: "model" },
  { headerName: "Price", field: "price" }
];

const data = [
  ["2017", 10, 11, 12, 13],
  ["2018", 20, 11, 14, 13],
  ["2019", 30, 15, 12, 13]
];

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

app.get("/one", function(req, res) {
  res.json({ columns: columns, data: data });
});

app.use(function(req, res) {
  res.json({ columns: columnDefs, data: data });
});

app.listen(3000, function() {
  console.log("reporting on port 3000!");
});

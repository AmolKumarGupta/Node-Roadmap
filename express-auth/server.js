const express = require("express");
const bodyParser = require("body-parser");
const path = require("node:path");

const app = express();
app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use((req, res) => {
  res.send("<h1>Hello</h1>");
});
app.listen(8080);

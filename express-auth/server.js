const express = require("express");
const bodyParser = require("body-parser");
const path = require("node:path");
const { default: mongoose } = require("mongoose");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const flash = require("req-flash");

const { uri } = require("./dbconfig");
const { authCheck } = require("./middleware/auth");
const authRoute = require("./routes/auth");
const AuthController = require("./controllers/AuthController");

const app = express();
app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(
  session({
    secret: "30dayofnode",
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({ mongoUrl: uri }),
  })
);
app.use(flash());

app.get("/login", AuthController.login);
app.get("/register", AuthController.register);
app.use("/", authCheck, authRoute);

app.use((req, res) => {
  res.render("errors/404");
});

mongoose.connect(uri).then(() => {
  app.listen(8080);
});

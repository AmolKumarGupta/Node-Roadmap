const User = require("../models/User");

class AuthController {
  static login(req, res) {
    res.render("login");
  }

  static postLogin(req, res) {}

  static register(req, res) {
    res.render("register");
  }

  static postRegister(req, res) {
    const user = new User({ ...req.body });
    user
      .save()
      .then((doc) => {
        req.session.isAuth = true;
        req.session.user = doc;
        return res.redirect("/");
      })
      .catch((err) => {
        console.log(err);
        return res.redirect("/register");
      });
  }

  static logout(req, res) {
    req.session.destroy((err) => {
      if (err) {
        console.log(err);
      }

      return res.redirect("/login");
    });
  }

  static index(req, res) {
    res.send("home page");
  }
}

module.exports = AuthController;

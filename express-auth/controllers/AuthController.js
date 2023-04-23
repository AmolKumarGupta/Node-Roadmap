const User = require("../models/User");

class AuthController {
  static login(req, res) {
    res.render("login");
  }

  static postLogin(req, res) {
    if (!req.body?.name || !req.body?.password) {
      req.flash("alert", {
        label: "danger",
        msg: "Invalid inputs!",
      });
      return res.redirect("/login");
    }

    User.findOne({
      name: req.body.name,
    })
      .exec()
      .then((doc) => {
        if (!doc) {
          req.flash("alert", {
            label: "danger",
            msg: "User not found!",
          });
          return res.redirect("/login");
        }

        doc.comparePassword(req.body.password, (err, isMatch) => {
          if (err) {
            console.log(err);
            req.flash("alert", {
              label: "danger",
              msg: "Something went wrong!",
            });
            return res.redirect("/login");
          }
          if (isMatch == false) {
            req.flash("alert", {
              label: "warning",
              msg: "Incorrect password!",
            });
            return res.redirect("/login");
          }

          req.session.isAuth = true;
          req.session.user = doc;
          return res.redirect("/");
        });
      })
      .catch((err) => {
        console.log(err);
        req.flash("alert", {
          label: "danger",
          msg: "Something went wrong!",
        });
        return res.redirect("/login");
      });
  }

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

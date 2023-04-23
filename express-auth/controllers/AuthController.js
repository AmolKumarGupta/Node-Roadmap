class AuthController {
  static login(req, res) {
    res.render("login");
  }

  static register(req, res) {
    res.render("register");
  }

  static index(req, res) {
    res.send("home page");
  }
}

module.exports = AuthController;

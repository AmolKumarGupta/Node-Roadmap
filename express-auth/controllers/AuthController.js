class AuthController {
  static login(req, res) {
    res.render("login");
  }

  static register(req, res) {}
}

module.exports = AuthController;

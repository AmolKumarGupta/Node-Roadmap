function authCheck(req, res, next) {
  if (!req.sessions?.isAuth) {
    return res.redirect("/login");
  }
  next();
}

module.exports = {
  authCheck,
};

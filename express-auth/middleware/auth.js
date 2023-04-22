function authCheck(req, res, next) {
  res.locals.isAuth = req.sessions?.isAuth ? true : false;
  if (!req.sessions?.isAuth) {
    return res.redirect("/login");
  }
  next();
}

module.exports = {
  authCheck,
};

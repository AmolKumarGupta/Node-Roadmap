function authCheck(req, res, next) {
  res.locals.isAuth = req.session?.isAuth ? true : false;
  if (!req.session?.isAuth) {
    return res.redirect("/login");
  }
  next();
}

module.exports = {
  authCheck,
};

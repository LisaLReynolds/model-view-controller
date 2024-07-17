const withAuth = (req, res, next) => {
  //if user is logged in continue on with the request, else redirect them to login
  if (!req.session.loggedIn) {
    res.redirect("/login");
  } else {
    next();
  }
};

module.exports = {
  withAuth: (req, res, next) => {
    //if user is logged in continue on with the request, else redirect them to login
    if (!req.session.loggedIn) {
      res.redirect("/login");
    } else {
      next();
    }
  },
};

//{withAuth}

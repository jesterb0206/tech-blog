const withAuth = (req, res, next) => {
  if (!req.session.user_id) {
    console.log("You're not logged in!");
    res.redirect("/login");
  } else {
    next();
  }
};

module.exports = withAuth;

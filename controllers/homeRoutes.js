const router = require("express").Router();
const { reset } = require("nodemon");
const { User, Comment, Post } = require("../models");
const withAuth = require("../utils");

// Homepage

router.get("/", async (req, res) => {
  const postData = await Post.findAll();
  const posts = postData.map((post) => post.get({ plain: true }));

  res.render("homepage", {
    posts,
    logged_in: req.session.logged_in,
  });
});

// Single post

router.get("/post/:id", async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ["username"],
        },
        {
          model: Comment,
          attributes: ["comment", "date_commented", "user_id"],
          include: [
            {
              model: User,
              attributes: ["username"],
            },
          ],
        },
      ],
    });

    const posts = postData.get({ plain: true });
    res.render("viewport", {
      ...posts,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Login

router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

// Logout

router.get("/logout", (req, res) => {
  if (!req.session.logged_in) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

// Signup

router.get("/signup", (req, res) => {
  if (req.session.logged_in) {
    reset.redirect("/");
    return;
  }

  res.render("signup");
});

module.exports = router;

const router = require('express').Router();
const { User, Comment, Post } = require('../models');
const withAuth = require('../utils/auth');

// Dashboard

router.get('/', async (req, res) => {
  const postData = await Post.findAll({
    include: [
      {
        model: User,
        attributes: ['id', 'username'],
        where: { id: req.session.user_id },
      },
    ],
  });

  const posts = postData.map((post) => post.get({ plain: true }));

  res.render('dashboardhome', {
    layout: 'dashboard',
    posts,
    logged_in: req.session.logged_in,
  });
});

// Create post

router.get('/newPost', withAuth, (req, res) => {
  res.render('newPost', {
    layout: 'dashboard',
    logged_in: req.session.logged_in,
  });
});

// Edit post

router.get('/edit/:id', async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id);
    console.log(req.params.id);

    const posts = postData.get({ plain: true });
    console.log(posts);

    res.render('editpost', {
      layout: 'dashboard',
      ...posts,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;

const { Post } = require("../../models")
const router = require("express").Router();

// Create a new post

router.post("/", async (req, res) => {
    try {
        const newPost = await Post.create({
            title: req.body.title,
            content: req.body.content,
            user_id: req.session.user_id,
        });
        res.status(200).json(newPost);
    } catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
});
const express = require('express');
const Post = require('../models/Post');
const router = express.Router();

router.get('/', async (req, res) => {
    const posts = await Post.find().sort({ createdAt: 'descending' })
    res.render('forum', { posts: posts });
});

router.get('/post', (req, res) => {
    res.render('post', { post: new Post() });
});


router.get('/:id', async (req, res) => {
    const articleId = req.params.id
    const post = await Post.findById(articleId)
    res.render('show', { post: post })
})

router.post('/', async (req, res) => {
    let post = new Post({
        title: req.body.title,
        location: req.body.location,
        description: req.body.description,
        message: req.body.message,
    });

    try {
        post = await post.save();
        res.redirect(`/forum/${post.id}`);
    } catch (e) {
        console.log(e);
        res.render('forum/post', { post: post });
    }
});

module.exports = router;

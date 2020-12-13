const express = require('express');
const Post = require('../models/Post');
const router = express.Router();

router.get('/', async (req, res) => {
    const posts = await Post.find().sort({ createdAt: 'descending' })
    res.render('forum', { posts: posts });
});

// router.get('/:id', (req, res) => {
//     res.send(req.params.id)
// })

router.get('/post', (req, res) => {
    res.render('post', { post: new Post() });
});

router.post('/', async (req, res) => {
    let post = new Post({
        title: req.body.title,
        location: req.body.location,
        description: req.body.description,
        message: req.body.message,
    });

    try {
        post = await post.save();
        console.log('POST SAVED');
        // res.redirect(`/map/${post.id}`);
        res.redirect('/forum')
    } catch (e) {
        console.log(e);
        res.render('forum/post', { post: post });
    }
});

module.exports = router;

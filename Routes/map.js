const express = require('express');
const Post = require('../Models/Post');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('map/map');
});

router.get('/post', (req, res) => {
    res.render('map/post', { post: new Post() });
});

router.post('/', async (req, res) => {
    let post = new Post({
        title: req.body.title,
        description: req.body.description,
        message: req.body.message,
    });

    try {
        post = await post.save();
        console.log('POST SAVED');
        res.redirect('/map');
    } catch (e) {
        console.log(e);
        res.render('map/post', { post: post });
    }
});

module.exports = router;

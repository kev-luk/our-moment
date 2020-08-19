const express = require('express');
const Post = require('../Models/Post');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('post post post post post post');
});

module.exports = router;

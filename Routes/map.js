const express = require('express');
const Post = require('../Models/Post');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('map');
});

module.exports = router;

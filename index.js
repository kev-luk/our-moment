if (process.env.NODE_ENV != 'production') {
    require('dotenv').config();
}

const path = require('path');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const mapRouter = require('./Routes/map');
const Post = require('./Models/Post');
const PORT = process.env.PORT || 3000;
const url = process.env.MongoURI;

mongoose
    .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB...'))
    .catch((err) => console.log(err));

// app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/Views'));
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.redirect('home');
});

app.get('/home', async (req, res) => {
    const posts = await Post.find().sort({ createdAt: 'descending' }).limit(4);
    res.render('home', { posts: posts });
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/learn-more', (req, res) => {
    res.render('learn');
});

app.use('/map', mapRouter);

app.listen(PORT, (req, res) => {
    console.log('Succesfully started server...');
});

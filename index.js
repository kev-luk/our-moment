if (process.env.NODE_ENV != 'production') {
    require('dotenv').config();
}

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const mapRouter = require('./Routes/map');
const PORT = process.env.PORT || 3000;
const url = process.env.MongoURI;

mongoose
    .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB...'))
    .catch((err) => console.log(err));

app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/Views'));
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/home', (req, res) => {
    res.render('home');
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.use('/map', mapRouter);

app.listen(PORT, (req, res) => {
    console.log('Succesfully started server...');
});

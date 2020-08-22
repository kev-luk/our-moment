const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    location: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    description: {
        type: String,
    },
    message: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model('Post', postSchema);

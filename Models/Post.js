const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    currentDate: {
        type: Date,
        default: Date.now,
    },
    description: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model('Post', postSchema);

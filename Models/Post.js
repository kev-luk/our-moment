const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
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

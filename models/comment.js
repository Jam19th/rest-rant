// Dependencies
const mongoose = require('mongoose');

let commentSchema = new mongoose.Schema({
    author: {
        type: String,
        default: 'Anonymous',
    },
    rant: {
        type: Boolean,
        default: false,
    },
    stars: {
        type: Number,
        required: true,
    },
    content: {
        type: String,
        default: '',
    },
})

//Export the model schema
module.exports = mongoose.model('Comment', commentSchema);
// Dependencies
require('dotenv').config()
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

//export the model
module.exports.Place = require('./places.js');
module.exports.Comment = require('./comment.js');
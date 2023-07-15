// Dependencies
const mongoose = require('mongoose');

// Create a schema for the places collection
const placeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    pic: String,
    cuisines: {
        type: String,
        required: true
    },
    city: {
        type: String,
        default: 'Anytown'
    },
    state: {
        type: String,
        default: 'USA'
    },
    founded: Number,
})

// module.exports = [{
//     name: 'H-Thai-ML',
//     city: 'Seattle',
//     state: 'WA',
//     cuisines: 'Thai, Pan-Asian',
//     pic: 'http://placekitten.com/250/250'
// }, {
//     name: 'Coding Cat Cafe',
//     city: 'Phoenix',
//     state: 'AZ',
//     cuisines: 'Coffee, Bakery',
//     pic: 'https://cdn.pixabay.com/photo/2016/10/03/07/17/coffee-1711012_1280.jpg'
// }]

// Export the model
module.exports = mongoose.model('Place', placeSchema);
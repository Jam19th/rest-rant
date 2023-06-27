const router = require('express').Router();

//GET /places
router.get('/', (req, res) => {
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: 'http://placekitten.com/250/250'
    }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: 'https://cdn.pixabay.com/photo/2016/10/03/07/17/coffee-1711012_1280.jpg'
    }]

    res.render('places/index', { places })
})

//GET /places/new
router.get('/new', (req, res) => {
    res.render('places/new')
})


module.exports = router;
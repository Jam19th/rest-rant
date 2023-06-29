const router = require('express').Router();
const places = require('../models/places.js');

//GET /places
router.get('/', (req, res) => {
    res.render('places/index', { places })
})

//GET /places/new
router.get('/new', (req, res) => {
    res.render('places/new')
})

//GET /places/:id
router.get('/:id', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
        res.render('error404')
    }
    else if (!places[id]) {
        res.render('error404')
    }
    else {
        res.render('places/show', { place: places[id], id }
        )
    }
})

//POST /places
router.post('/', (req, res) => {
    // console.log(req.body)

    if (!req.body.pic) {
        req.body.pic = 'https://placekitten.com/400/400'
    }
    if (!req.body.city) {
        req.body.city = 'Anytown'
    }
    if (!req.body.state) {
        req.body.state = 'USA'
    }

    places.push(req.body)
    res.redirect('/places')
})



module.exports = router;
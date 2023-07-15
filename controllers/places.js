// Dependencies
const router = require('express').Router();
// const places = require('../models/places.js');
const db = require('../models');

//Index Route
router.get('/', (req, res) => {
    db.Place.find()
        .then((places) => {
            res.render('places/index', { places })
        })
        .catch(err => {
            console.log(err)
            res.render('error404')
        })
})

// Create Route
router.post('/', (req, res) => {
    db.Place.create(req.body)
        .then(() => {
            res.redirect('/places')
        })
        .catch(err => {
            console.log('err', err)
            res.render('error404')
        })
})


// New Route
router.get('/new', (req, res) => {
    res.render('places/new')
})

// Show Route
router.get('/:id', (req, res) => {
    db.Place.findById(req.params.id)
        .then(place => {
            res.render('places/show', { place })
        })
        .catch(err => {
            console.log('err', err)
            res.render('error404')
        })
})

// UPDATE Route
router.put('/:id', (req, res) => {
    res.send('PUT /places/:id stub')
})

// Delete Route
router.delete('/:id', (req, res) => {
    res.send('DELETE /places/:id stub')
})

// EDIT Route
router.get('/:id/edit', (req, res) => {
    res.send('GET edit form stub')
})

router.post('/:id/rant', (req, res) => {
    res.send('Get /places/:id/rant stub')
})

router.delete('/:id/rant/:rantID', (req, res) => {
    res.send('GET /places/:id/rant/:rantID stub')
})


// Export the Router
module.exports = router;
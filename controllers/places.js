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

// New Route
router.get('/new', (req, res) => {
    res.render('places/new')
})

// Show Route
router.get('/:id', (req, res) => {
    db.Place.findById(req.params.id)
        .populate('comments')
        .then(place => {
            console.log(place.comments)
            res.render('places/show', { place })
        })
        .catch(err => {
            console.log('err', err)
            res.render('error404')
        })
})

// Create Route
router.post('/', (req, res) => {
    if (!req.body.pic) {
        // If no pic is provided, use a default
        req.body.pic = 'https://placekitten.com/400/400'
    }

    db.Place.create(req.body)
        .then(() => {
            res.redirect('/places')
        })
        .catch(err => {
            if (err.name === 'ValidationError') {
                let message = 'Validation Error: '
                for (var field in err.errors) {
                    message += `${field} was ${err.errors[field].value}.`
                    message += `${err.errors[field].message}}`
                }
                console.log('Validation error message', message)
                res.render('places/new', { message })
            }
            else {
                res.render('error404')
            }
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

// CREATE Comment Route
router.post('/:id/comment', (req, res) => {
    console.log(req.body)
    db.Place.findById(req.params.id)
        .then(place => {
            db.Comment.create(req.body)
                .then(comment => {
                    place.comments.push(comment.id)
                    place.save()
                        .then(() => {
                            res.redirect(`/places/${req.params.id}`)
                        })
                })
                .catch(err => {
                    res.render('error404')
                })
        })
        .catch(err => {
            res.render('error404')
        })
})


router.post('/:id/rant', (req, res) => {
    res.send('Get /places/:id/rant stub')
})

router.delete('/:id/rant/:rantID', (req, res) => {
    res.send('GET /places/:id/rant/:rantID stub')
})


// Export the Router
module.exports = router;
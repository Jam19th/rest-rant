const db = require('../models')

// To use await, we need an async function.
async function seed() {
    // Get the place, H-Thai-ML
    let place = await db.Place.findOne({ name: 'H-Thai-ML' })

    //Create a fake sample comment
    let comment = await db.Comment.create({
        author: 'Famished Fran',
        rant: false,
        stars: 5.0,
        content: 'I love this place!',
    })

    //Add the comment to the place array
    place.comments.push(comment.id)

    //save the place with the new comment
    await place.save()

    //exit the program
    process.exit()
}

seed()

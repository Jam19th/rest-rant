// Modules and Global Variables
require('dotenv').config();
const express = require('express')
const app = express()

//Express Middleware
app.set('views, __dirname + /views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))

//Controllers & Routes
app.use('/places', require('./controllers/places'))

app.get('/', (req, res) => {
    res.render('home')
})

app.get('*', (req, res) => {
    res.render('error404')
})

//Listen for connections
app.listen(process.env.PORT, () => {
    console.log(`http://localhost:${process.env.PORT}`)
    console.log(`http://localhost:${process.env.PORT}/places`)
    console.log(`http://localhost:${process.env.PORT}/404test`)
    console.log(`http://localhost:${process.env.PORT}/places/new`)
})

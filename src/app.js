const express = require('express')
const routerRandom = require('./routes/random')
const routerAnime = require('./routes/anime')

const app = express()
app.use(express.json())

app.use('/anime', routerAnime)
app.use('/random', routerRandom)

module.exports = app
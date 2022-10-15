const express = require('express');
const PokemonRoutes = require('./routes/PokemonRoutes');
const ElasticRoutes = require('./routes/ElasticRoutes')
const { database } = require('./dbConnect')

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})

const app = express()
;
app.use(express.json());
app.use(express.urlencoded({limit: '500mb', extended: true, parameterLimit: 500000000}));


app.listen(3000, () => {
    console.log(`PokeSearch Server Started at http://localhost:3000`)
})

app.use('/pokemon', PokemonRoutes)
app.use('/elastic', ElasticRoutes)



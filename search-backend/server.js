const express = require('express');
const PokemonRoutes = require('./routes/PokemonRoutes');
const ElasticRoutes = require('./routes/ElasticRoutes')
const { database } = require('./dbConnect');
const pokedex = require('./pokedex.json');
const fs = require('fs')


/* function jup() {
    let count = 1;
    let img = "";
    
    pokedex.forEach((pokemon) => {
        if (pokemon['pokedexId'] == count){
            if (count < 10){
                img = `00${count}`
            } else if (count > 0 && count < 100) {
                img = `0${count}`
            }
            else {
                img = count
            }
            pokemon['imageURL'] = `https://raw.githubusercontent.com/adharshrj/PokeSearch/main/search-backend/pokemon/${img}.png`
            count++;
        }
    })

    fs.writeFile("pokedex2.json", JSON.stringify(pokedex) , {encoding:"utf8"}, function(err) {
        if(err) {
            console.log(err);
        } else {
            console.log("The file was saved!");
        }
    });
} */


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



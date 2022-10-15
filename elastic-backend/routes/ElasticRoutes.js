const express = require('express');
const router = express.Router()
const { phraseSearch } = require('../SearchEngine/SearchEngine');

/*
Path for elastic search implementation
*/

router.get('/:index/:type', async (req, res) => {
    const highlight_fields = {
        fields: {
          name:{},
          type:{},
          pokedexId: {}
        },
    }

    const multi_match_fields = [
        'name.english',
        'type',
        'pokedexId'
    ]
    
    const data = await phraseSearch(req.params.index, req.params.type, req.query.q, multi_match_fields, highlight_fields );
    res.json(data);
});


module.exports = router
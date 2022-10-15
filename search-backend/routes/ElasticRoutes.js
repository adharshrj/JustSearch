
const { Pokemon } = require('../schema/Schema');
const express = require('express');
const router = express.Router()

router.post('/sync', async (_req, res) => {
    const stream = await Pokemon.synchronize();
    let count = 0;
    
    stream.on('data', function(_err, _doc) {
      count++;
      console.log("Elastic Indexing Pokemon: ",count)

    }); 
    
    stream.on('close', function() {
      console.log('Elastic indexed ' + count + ' Pokemon!');
      res.status(200).json(`Elastic indexed ${count} Pokemon!`)
    });
    
    stream.on('error', function(err) {
      console.log(err);
      res.status(400).json(`Error Occured - ${err}`)
    });

    return res
});

module.exports = router;

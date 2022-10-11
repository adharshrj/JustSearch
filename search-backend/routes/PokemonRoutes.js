const express = require('express');
const router = express.Router()
const { Pokemon } = require('../schema/Schema')
const pokedex = require('../pokedex.json')

router.post('/create', async (req, res) => {
    const data = new Pokemon({
        id: req.body.id,
        name: req.body.name,
        type: req.body.type,
        base: req.body.base
    })
    try {
        console.log(data)
        await data.save();
        return res.status(200).send(data)
    }
    catch (error) {
        console.error(error);
        return res.status(400).send({ message: error.message })
    }
})



router.post('/createMultiple', async (_req, res) => {
    pokedex.forEach(async pokemon => {
        const data = new Pokemon({
            id: pokemon.id,
            name: pokemon.name,
            type: pokemon.type,
            base: pokemon.base
        })
        try {
            console.log(data)
            await data.save();
            return res.status(200)
        }
        catch (error) {
            res.status(500).json({ message: error.message })
        }

})})

router.get('/getAll', async (_req, res) => {
    try {
        const data = await Pokemon.find();
        res.status(200).json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.get('/get/:id', async (req, res) => {
    try {
        const data = await Pokemon.find({id: req.params.id});
        res.json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})


router.patch('/update/:id', async (req, res) => {
    try {
        const id = {id: req.params.id};
        const updatedData = req.body;
        const options = { new: true };

        const result = await Pokemon.findOneAndUpdate(
            id, updatedData, options
        )

        res.send(result)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

router.delete('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Pokemon.findOneAndDelete({id:id})
        res.send(`Document with ${data.name} has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

module.exports = router;
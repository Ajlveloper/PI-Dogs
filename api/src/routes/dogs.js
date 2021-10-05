const express = require('express');
const dogs = express.Router();
const { 
    getDogsApi,
    getDogsDb,
    getAllDogs
 } = require('../controllers/controllerDogs.js');
 const { Dog, Temperament } = require('../db.js')

dogs.use(express.json());

dogs.get('/dogs', async (req, res) => {
    const { name } = req.query;
    const allDogs = await getAllDogs();

    if (name) {
        const dog = allDogs.filter(d => d.name.toLowerCase().includes(name.toLowerCase()));
        dog.length ?
        res.status(200).json(dog) :
        res.status(404).json('dog not found');
    } else {
        res.status(200).json(allDogs);
    }
});

dogs.get('/dogs/:idRaza', async (req, res) => {
    const { idRaza } = req.params;
    const allDogs = await getAllDogs();
    if (idRaza) {
        const dog = await allDogs.find(d => d.id.toString() === idRaza);    
        dog ? res.status(200).json(dog) : res.status(404).send('dog not found');
    }
})


dogs.post('/dogs', async (req, res) => {
    const {
        name,
        height_min,
        height_max,
        weight_min,
        weight_max,
        life_span,
        temperaments,
        createDB,
        image
    } = req.body;

    const createDog = await Dog.create({
        name: name,
        height_min: parseInt(height_min),
        height_max: parseInt(height_max),
        weight_min: parseInt(weight_min),
        weight_max: parseInt(weight_max),
        life_span: life_span,
        createDB: createDB,
        image: image
    });

    const findTemp = await Temperament.findAll({
        where: {name: temperaments}
    });
    createDog.addTemperament(findTemp);
    res.status(200).send('successful dog creation');
})







module.exports = dogs;
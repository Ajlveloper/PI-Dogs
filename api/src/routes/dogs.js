const express = require('express');
const dogs = express.Router();
const {
    getDogsApi,
    getDogsDb,
    getAllDogs
} = require('../controllers/controllerDogs.js');

const { Dog, Temperament } = require('../db.js');
const { get } = require('./temperament.js');

dogs.use(express.json());

dogs.get('/dogs', async (req, res) => {
    // const { name } = req.query;
    const allDogs = await getAllDogs();

    try {
        res.status(200).json(allDogs);
    } catch (error) {
        console.log(error)
    }


});

dogs.get('/dogsQ', async (req, res) => {
    const { name } = req.query;
    const allDogs = await getAllDogs();

    try {
        if (name) {
            const dog = allDogs.filter(d => d.name.toLowerCase().includes(name.toLowerCase()));
            res.status(200).json(dog)
        } else {
            res.status(404).redirect('/error');
        }
    } catch (error) {
        console.log(error)
    }


});

dogs.get('/dogs/:idRaza', async (req, res) => {
    const { idRaza } = req.params;
    const allDogs = await getAllDogs();

    try {
        if (idRaza) {
            let dog = await allDogs.find(d => d.id.toString() === idRaza);
            dog ? res.status(200).json(dog) : res.status(404).send('dog not found');
        }
    } catch (error) {
        console.log(error)
    }

})

dogs.get('error', (req, res) => {
    res.send('Not results')
})


dogs.post('/dogs', async (req, res) => {
    let createDB;
    const {
        name,
        height_min,
        height_max,
        weight_min,
        weight_max,
        life_span,
        temperaments,
        image
    } = req.body;

    if (name && height_min && height_max && weight_min && weight_max && life_span && temperaments && image) {
        const createDog = await Dog.create({
            name: name,
            height_min: parseInt(height_min),
            height_max: parseInt(height_max),
            weight_min: parseInt(weight_min),
            weight_max: parseInt(weight_max),
            life_span: life_span,
            createDB,
            image: image
        });

        const findTemp = await Temperament.findAll({
            where: { name: temperaments }
        });
        createDog.addTemperament(findTemp);
        res.status(200).send('successful dog creation');
    } else {
        res.status(404).send('data is required');
    }
})







module.exports = dogs;
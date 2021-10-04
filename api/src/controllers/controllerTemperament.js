const { Dog, Temperament } = require('../db.js');
// const { API_KEY } = process.env;
// const axios = require('axios');
const { getDogsApi } = require('./controllerDogs.js');

const getTemperament = async () => {
    try {
        const dogs = await getDogsApi();
        const temperament = dogs.map(t => t.temperaments).join().split(',');
        return temperament;
    } catch (err) {
        console.log(err);
    }
}

module.exports = {
    getTemperament
};
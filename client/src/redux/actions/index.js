import axios from 'axios';
export const GET_DOGS = 'GET_DOGS';
export const GET_TEMPERAMENT_FILTER = 'GET_TEMPERAMENTFILTER';
export const GET_TEMPERAMENTS = 'GET_TEMPERAMENTS';
export const GET_BREED_FILTER = 'GET_BREEDFILTER';
export const GET_FILTER_CREATED = 'GET_FILTER_CREATED';
export const ORDER_ASC_DES = 'ORDER_ASC_DES';
export const ORDER_ORDER_WEIGHT = 'ORDER_ORDER_WEIGHT';
export const SEARCH_BREED = 'SEARCH_BREED';
export const GET_DETAIL = 'GET_DETAIL';
export const GET_CREATE = 'GET_CREATE';


export const getDogs = () => {
    return async (dispatch) => {
        try {
            const dogs = await axios.get('http://localhost:3001/dogs')
            return dispatch({
                type: GET_DOGS,
                payload: dogs.data,
            })

        } catch (error) {
            console.log(error)
            return [];
        }
    }
}

export const getTemperaments = () => {
    return async (dispatch) => {
        try {
            const temp = await axios.get('http://localhost:3001/temperaments')
            return dispatch({
                type: GET_TEMPERAMENTS,
                payload: temp.data
            })
        } catch (error) {
            console.log(error)
            return [];
        }
    }
}

export const getDetail = (id) => {
    return async (dispatch) => {
        try {
            let detailDog = await axios.get(`http://localhost:3001/dogs/${id}`);
            return dispatch({
                type: GET_DETAIL,
                payload: detailDog.data
            })
        } catch (error) {
            console.log(error)
            return [];
        }

    }
}

export const getCreate = (payload) => {
    return async () => {
        try {
            let createDog = await axios.post('http://localhost:3001/dogs', payload)
            return createDog;
        } catch (error) {
            console.log(error)
            return [];
        }
    }
}

export const getBreedSearch = (breed) => {
    return async (dispatch) => {
        try {
            const dog = await axios.get(`http://localhost:3001/dogsQ?name=${breed}`)
            return dispatch({
                type: GET_DOGS,
                payload: dog.data,
            })
        } catch (error) {
            console.log(error)
            return [];
        }

    }
}



export const getTemperamentFilter = (temperament) => {
    return {
        type: GET_TEMPERAMENT_FILTER,
        temperament
    }
}

export const getBreedFilter = (breed) => {
    return {
        type: GET_BREED_FILTER,
        breed
    }
}

export const getFilterCreated = (create) => {
    return {
        type: GET_FILTER_CREATED,
        create
    }
}

export const getOrder = (order) => {
    return {
        type: ORDER_ASC_DES,
        order
    }
}

export const getOrderWeight = (weight) => {
    return {
        type: ORDER_ORDER_WEIGHT,
        weight
    }
}


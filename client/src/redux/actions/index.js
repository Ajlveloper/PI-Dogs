import axios from 'axios';
export const GET_DOGS = 'GET_DOGS';
export const GET_TEMPERAMENT_FILTER = 'GET_TEMPERAMENTFILTER';
export const GET_TEMPERAMENTS = 'GET_TEMPERAMENTS';
export const GET_BREED_FILTER = 'GET_BREEDFILTER';
export const GET_FILTER_CREATED = 'GET_FILTER_CREATED';
export const ORDER_ASC_DES = 'ORDER_ASC_DES';
export const ORDER_ORDER_WEIGHT = 'ORDER_ORDER_WEIGHT';
export const GET_DETAIL = 'GET_DETAIL';
export const GET_CREATE = 'GET_CREATE';


export const getDogs = () => {
    return async (dispatch) => {
        try {
            const dogs = await axios.get('/dogs')
            return dispatch({
                type: GET_DOGS,
                payload: dogs.data
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
            const temp = await axios.get('/temperaments')
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
            let detailDog = await axios.get(`/dogs/${id}`);
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

export const getCreate = async (payload) => {
    return axios.post('/dogs', payload);
}

export const getBreedSearch = (breed) => {
    return async (dispatch) => {
        try {
            const dog = await axios.get(`/dogsQ?name=${breed}`)
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



export const getTemperamentFilter = (payload) => {
    return {
        type: GET_TEMPERAMENT_FILTER,
        payload
    }
}

export const getBreedFilter = (payload) => {
    return {
        type: GET_BREED_FILTER,
        payload
    }
}

export const getFilterCreated = (payload) => {
    return {
        type: GET_FILTER_CREATED,
        payload
    }
}

export const getOrder = (payload) => {
    return {
        type: ORDER_ASC_DES,
        payload
    }
}

export const getOrderWeight = (payload) => {
    return {
        type: ORDER_ORDER_WEIGHT,
        payload
    }
}


import React from 'react'
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getDetail } from '../../redux/actions';
import { useParams } from 'react-router';
import Loading from '../Loading/Loading';

const DogDetail = () => {
    const [loading, setLoading] = useState(false);
    const { idDog } = useParams();
    const dispatch = useDispatch();
    const dog = useSelector(state => state.dogDetail);
    const {
        image,
        name,
        temperaments,
        height_min,
        height_max,
        weight_min,
        weight_max,
        life_span
    } = dog

    useEffect(() => {
        setLoading(true)
        dispatch(getDetail(idDog));
    }, [dispatch, idDog])

    if (loading) {
        console.log('Loading entro')
        setTimeout(() => {
            setLoading(false)
        }, 1000);
        return (
            <Loading />
        )
    }
     else {
         return (
             <>
             <h2>Detalles de perro</h2>
                 <div>
                     <img
                         src={image}
                         alt={name}
                     />
                     <p>{name}</p>
                     <p>Temperamentos: {temperaments}</p>
                     <p>Altura min: {height_min}</p>
                     <p>Altura max: {height_max}</p>
                     <p>Peso min: {weight_min}</p>
                     <p>Peso max: {weight_max}</p>
                     <p>Años de Vida: {life_span}</p>
                 </div>
             </>
         )
    }

}

export default DogDetail;

import React from 'react'
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getDetail } from '../../redux/actions';
import { useParams } from 'react-router';
import Loading from '../Loading/Loading';
import Navbar from '../Navbar/Navbar';
import './DogDetail.css'
import { Huella } from '../../assets/img/svg';

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
        const detail = async () => {
            await dispatch(getDetail(idDog));
        }
        detail()
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
                <Navbar />
                <div className='DogDetail_general'>
                    <div className='H2Detail'>
                        <div className='bg_H2Detail'></div>
                        <h2>Dog details:</h2>
                    </div>
                    <div className='DogDeatil'>
                        <div className='DogDeatil_Div'>
                            <div className='DogDeatil_img'>
                                <img
                                    src={image}
                                    alt={name}
                                />
                                <div className='DogDeatil_bg'></div>
                            </div>

                            <p className='FontWeight p_detail_title'>{name}</p>
                            <div>
                                <div className='Huella_detail'>
                                    <Huella  />
                                </div>
                                <p className='FontWeight'>Temperamentos:</p> <p>{Array.isArray(dog.temperaments) ? dog.temperaments?.map(t => t.name).join(', ') : temperaments}</p>
                                <p className='FontWeight'>Altura min:</p> <p>{height_min}cm</p>
                                <p className='FontWeight'>Altura max:</p> <p>{height_max}cm</p>
                                <p className='FontWeight'>Peso min:</p> <p>{weight_min}kg</p>
                                <p className='FontWeight'>Peso max:</p> <p>{weight_max}kg</p>
                                <p className='FontWeight'>Años de Vida:</p> <p>{life_span}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }

}

export default DogDetail;

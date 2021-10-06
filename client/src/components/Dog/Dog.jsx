import React from 'react';
import { Link } from 'react-router-dom';
import './Dog.css';

export default function Dog({ img, name, temperament, weight_min, weight_max, id }) {
    return (
        <li>
            <img src={img} alt={name} />
            <Link to={`/detailDog/${id}`}>
                <li>{name}</li>
            </Link>
            <p>Temperanto: {temperament} </p>
            <p>Peso min: {weight_min}</p>
            <p>Peso max: {weight_max}</p>
        </li>
    )
}

import React from 'react';
import './Dog.css';

export default function Dog({ img, name, temperament, weight_min, weight_max }) {
    return (
        <div>
            <img src={img} alt={name} />
            <li>{name}</li>
            <p>Temperanto: {temperament} </p>
            <p>Peso min: {weight_min}</p>
            <p>Peso max: {weight_max}</p>
        </div>
    )
}

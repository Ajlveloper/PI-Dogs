import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { validate } from '../../controllers/Validate';
import { getTemperaments, getCreate } from '../../redux/actions';
import { Huella } from '../../assets/img/svg.jsx'
import './DogCreate.css'
import Navbar from '../Navbar/Navbar';




const DogCreate = () => {

    /*Estados Locales____________________________ */

    const [input, setInput] = useState({
        name: '',
        height_min: '',
        height_max: '',
        weight_min: '',
        weight_max: '',
        life_span: '',
        temperaments: [],
        image: ''
    })

    const [errors, setErrors] = useState({})


    /* Estados Redux______________________ */
    const temepraments = useSelector(state => state.temperamentAll)
    const dispatch = useDispatch()



    /* Efectos Secundarios_______________________ */
    useEffect(() => {
        const temp = async () => {
            await dispatch(getTemperaments())
        }
        temp()
    }, [dispatch])



    /* Handlers______________________ */

    const handleInput = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })

        setErrors(validate({
            ...input,
            [e.target.name]: e.target.value
        }))
        // console.log(input)
    }

    const handlerTemperament = ({ target }) => {
        setInput({
            ...input,
            temperaments: [...input.temperaments, target.value]
        })
        console.log(input.temperaments)
    }

    const handlerDeleteTemperament = (t) => {
        setInput({
            ...input,
            temperaments: input.temperaments.filter(tem => tem !== t)
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setErrors(validate({
            ...input,
            [e.target.name]: e.target.value
        }))
        if (input.name && input.height_min && input.height_max && input.weight_min && input.weight_max && input.life_span && input.temperaments.length && input.image) {
            dispatch(getCreate(input));
            alert('Successfully created breed of dog');
        } else {
            alert('Se requieren todos los datos completados');
        }
        setInput({
            name: '',
            height_min: '',
            height_max: '',
            weight_min: '',
            weight_max: '',
            life_span: '',
            temperaments: [],
            image: ''
        })
    }

    return (
        <div className='Form_general'>
            <Navbar />
            <div className='Flex_dog_create_form'>
                <div>
                    <form onSubmit={handleSubmit}>

                        <Huella />

                        <div>
                            <label htmlFor='Nombre'>Name:</label>
                            <div className='Input_form'>
                                <input
                                    type="text"
                                    placeholder='Name'
                                    name='name'
                                    value={input.name}
                                    onChange={handleInput}
                                    onKeyUp={handleInput}
                                    onBlur={handleInput}
                                    autoComplete='off'
                                />
                            </div>
                            {errors.name && (<p className='errors'>{errors.name}</p>)}
                        </div>


                        <div>
                            <label>Minimun height:</label>
                            <div className='Input_form'>
                                <input
                                    type="text"
                                    placeholder='Minimun height in cm'
                                    name='height_min'
                                    value={input.height_min}
                                    onChange={handleInput}
                                    onKeyUp={handleInput}
                                    onBlur={handleInput}
                                    maxLength='2'
                                />
                            </div>
                            {errors.height_min && (<p className='errors'>{errors.height_min}</p>)}
                        </div>

                        <div>
                            <label>Maximum height:</label>
                            <div className='Input_form'>
                                <input
                                    type="text"
                                    placeholder='Maximum height in cm'
                                    name='height_max'
                                    value={input.height_max}
                                    onChange={handleInput}
                                    onKeyUp={handleInput}
                                    onBlur={handleInput}
                                    maxLength='2'
                                />
                            </div>
                            {errors.height_max && (<p className='errors'>{errors.height_max}</p>)}
                        </div>


                        <div>
                            <label>Minimum weight:</label>
                            <div className='Input_form'>
                                <input type="text"
                                    placeholder='Minimum weight in kg'
                                    name='weight_min'
                                    value={input.weight_min}
                                    onChange={handleInput}
                                    onKeyUp={handleInput}
                                    onBlur={handleInput}
                                    maxLength='2'
                                />
                            </div>
                            {errors.weight_min && (<p className='errors'>{errors.weight_min}</p>)}
                        </div>

                        <div>
                            <label>Maximum weight:</label>
                            <div className='Input_form'>
                                <input
                                    type="text"
                                    placeholder='Maximum weight in kg'
                                    name='weight_max'
                                    value={input.weight_max}
                                    onChange={handleInput}
                                    onKeyUp={handleInput}
                                    onBlur={handleInput}
                                    maxLength='2'
                                />
                            </div>
                            {errors.weight_max && (<p className='errors'>{errors.weight_max}</p>)}
                        </div>

                        <div>
                            <label>Years of life:</label>
                            <div className='Input_form'>
                                <input
                                    type="text"
                                    placeholder='Years of life'
                                    name='life_span'
                                    value={input.life_span}
                                    onChange={handleInput}
                                    onKeyUp={handleInput}
                                    onBlur={handleInput}
                                />
                            </div>
                            {errors.life_span && (<p className='errors'>{errors.life_span}</p>)}
                        </div>

                        <div>
                            <label>Image:</label>
                            <div className='Input_form'>
                                <input
                                    type="text"
                                    placeholder="Image URL"
                                    name="image"
                                    value={input.image}
                                    onChange={handleInput}
                                    onKeyUp={handleInput}
                                    onBlur={handleInput}
                                />
                            </div>
                            {errors.image && (<p className='errors'>{errors.image}</p>)}
                        </div>




                        <div>
                            <label>Add temperaments:</label>
                            <div className='select_form'>
                                <select onChange={handlerTemperament}>
                                    {
                                        temepraments?.map(t => (
                                            <option
                                                value={t.name}
                                                key={t.id}
                                            >
                                                {t.name}
                                            </option>
                                        ))
                                    }
                                </select>
                            </div>
                        </div>


                        <div className='Button_form'>
                            <button type='submit'>Crear Raza</button>
                        </div>
                    </form>

                </div>
                <div className='Add_Temeperaments'>
                    <ul>
                        {
                            input.temperaments?.map(t => (
                                <div className='Temperament_Form' key={t}>
                                    <li>{t}</li>
                                    <div className='Div_Button_temperament_delete'>
                                        <button
                                            className='Button_temperament_delete'
                                            key={t}
                                            onClick={() => handlerDeleteTemperament(t)}
                                        >X
                                        </button>
                                    </div>
                                </div>

                            )
                            )
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default DogCreate;

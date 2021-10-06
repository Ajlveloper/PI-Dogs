import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { validate } from '../../controllers/Validate';
import { getTemperaments, getCreate } from '../../redux/actions';




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
        dispatch(getCreate(input))
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
        <div>
            <form onSubmit={handleSubmit}>

                <div>
                    <label htmlFor='Nombre'>Nombre</label>
                    <input
                        type="text"
                        placeholder='Nombre'
                        name='name'
                        value={input.name}
                        onChange={handleInput}
                        onKeyUp={handleInput}
                        onBlur={handleInput}
                    />
                    {errors.name && (<p>{errors.name}</p>)}
                </div>


                <div>
                    <label>Altura mínima</label>
                    <input
                        type="text"
                        placeholder='Altura mínima'
                        name='height_min'
                        value={input.height_min}
                        onChange={handleInput}
                        onKeyUp={handleInput}
                        onBlur={handleInput}
                        maxLength='2'
                    />
                    {errors.height_min && (<p>{errors.height_min}</p>)}
                </div>

                <div>
                    <label>Altura Máxima</label>
                    <input
                        type="text"
                        placeholder='Altura máxima'
                        name='height_max'
                        value={input.height_max}
                        onChange={handleInput}
                        onKeyUp={handleInput}
                        onBlur={handleInput}
                        maxLength='2'
                    />
                    {errors.height_max && (<p>{errors.height_max}</p>)}
                </div>


                <div>
                    <label>Peso mínimo</label>
                    <input type="text"
                        placeholder='Peso mínimo'
                        name='weight_min'
                        value={input.weight_min}
                        onChange={handleInput}
                        onKeyUp={handleInput}
                        onBlur={handleInput}
                        maxLength='2'
                    />
                    {errors.weight_min && (<p>{errors.weight_min}</p>)}
                </div>

                <div>
                    <label>Peso máximo</label>
                    <input
                        type="text"
                        placeholder='Peso máximo'
                        name='weight_max'
                        value={input.weight_max}
                        onChange={handleInput}
                        onKeyUp={handleInput}
                        onBlur={handleInput}
                        maxLength='2'
                    />
                    {errors.weight_max && (<p>{errors.weight_max}</p>)}
                </div>

                <div>
                    <label>Años de Vida</label>
                    <input
                        type="text"
                        placeholder='Años de vida'
                        name='life_span'
                        value={input.life_span}
                        onChange={handleInput}
                        onKeyUp={handleInput}
                        onBlur={handleInput}
                    />
                    {errors.life_span && (<p>{errors.life_span}</p>)}
                </div>
                
                <div>
                    <label>Imagen</label>
                    <input
                        type="text"
                        placeholder="URL de la Imagen"
                        name="image"
                        value={input.image}
                        onChange={handleInput}
                        onKeyUp={handleInput}
                        onBlur={handleInput}
                    />
                    {errors.image && (<p>{errors.image}</p>)}
                </div>




                <div>
                    <select onChange={handlerTemperament}>
                        {
                            temepraments.map(t => (
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


                <div>
                    <button type='submit'>Crear Raza</button>
                </div>
            </form>

            <ul>
                {
                    input.temperaments.map(t => (
                        <div key={t}>
                            <li>{t}</li>
                            <button
                                key={t}
                                onClick={() => handlerDeleteTemperament(t)}
                            >X
                            </button>
                        </div>

                    )
                    )
                }
            </ul>
        </div>
    )
}

export default DogCreate;

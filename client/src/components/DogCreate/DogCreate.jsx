import React, { useState } from 'react'
import { validate } from '../../controllers/Validate'
const DogCreate = () => {

    const [input, setInput] = useState({
        name: '',
        altMin: '',
        altMax: '',
        pesMin: '',
        pesMax: '',
        anoVida: ''
    })

    const [errors, setErrors] = useState({})


    const handleInput = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })

        setErrors(validate({
            ...input,
            [e.target.name]: e.target.value
        }))
        console.log(input)
    }


    const handleSubmit = (e) => {
        e.preventDefault()
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
                        name='altMin'
                        value={input.altMin}
                        onChange={handleInput}
                        onKeyUp={handleInput}
                        onBlur={handleInput}
                        maxLength='2'
                    />
                    {errors.altMin && (<p>{errors.altMin}</p>)}
                </div>

                <div>
                    <label>Altura Máxima</label>
                    <input
                        type="text"
                        placeholder='Altura máxima'
                        name='altMax'
                        value={input.altMax}
                        onChange={handleInput}
                        onKeyUp={handleInput}
                        onBlur={handleInput}
                        maxLength='2'
                    />
                    {errors.altMax && (<p>{errors.altMax}</p>)}
                </div>


                <div>
                    <label>Peso mínimo</label>
                    <input type="text"
                        placeholder='Peso mínimo'
                        name='pesMin'
                        value={input.pesMin}
                        onChange={handleInput}
                        onKeyUp={handleInput}
                        onBlur={handleInput}
                        maxLength='2'
                    />
                    {errors.pesMin && (<p>{errors.pesMin}</p>)}
                </div>

                <div>
                    <label>Peso máximo</label>
                    <input
                        type="text"
                        placeholder='Peso máximo'
                        name='pesMax'
                        value={input.pesMax}
                        onChange={handleInput}
                        onKeyUp={handleInput}
                        onBlur={handleInput}
                        maxLength='2'
                    />
                    {errors.pesMax && (<p>{errors.pesMax}</p>)}
                </div>

                <div>
                    <label>Años de Vida</label>
                    <input
                        type="text"
                        placeholder='Años de vida'
                        name='anoVida'
                        value={input.anoVida}
                        onChange={handleInput}
                        onKeyUp={handleInput}
                        onBlur={handleInput}
                    />
                    {errors.anoVida && (<p>{errors.anoVida}</p>)}
                </div>
                <div>
                    <input type="checkbox" name="" id="" />
                </div>
                    
                <div>
                    <button type='submit'>Enviar</button>
                </div>
            </form>
        </div>
    )
}

export default DogCreate;

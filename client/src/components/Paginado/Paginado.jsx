import React from 'react'
import './Paginado.css'

const Paginado = ({ dogsAll, paged, dogsPage }) => {
    const getNum = [];

    for (let i = 1; i <= Math.ceil(dogsAll/dogsPage); i++) {
        getNum.push(i);        
    }
    return (
        <footer className='footer'>
            <nav>
                <ul className="flexPaged ul">
                    {
                        getNum?.map(n => (
                            <li key={n} >
                                <button onClick={() => paged(n)}>{n}</button>
                            </li>
                        ))
                    }
                </ul>
            </nav>
        </footer>
    )
}

export default Paginado;

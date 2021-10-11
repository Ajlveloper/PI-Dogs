import React from 'react';
import { Link } from 'react-router-dom';
import {Huella} from '../../assets/img/svg.jsx'
import './Navbar.css'
const Navbar = () => {
    return (
        <header className='Flex_navbar'>
            <div className='flex_logo'>
                <Link to='/home'>
                    <div>

                        <Huella className='img_nav'/>
                        {/* <img
                            className='img_nav'
                            src={Huella}
                            alt="SoBeDog"
                        /> */}
                    </div>
                </Link>

                <div>
                    <h1>SoBeDog</h1>
                </div>
            </div>

            <div className='nav_home'>
                <Link to='/home'>
                    <p>Home</p>
                </Link>
            </div>

            <div className='nav_crear_perro'>
                <Link to='/createDog'>
                    <p>Crear perro</p>
                </Link>
            </div>
        </header>
    )
}

export default Navbar;

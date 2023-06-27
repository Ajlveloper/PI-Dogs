import React from 'react';
import { Link } from 'react-router-dom';
import {Huella} from '../../assets/img/svg.jsx'
import './Navbar.css'
const Navbar = () => {
    return (
        <header className='Flex_navbar'>
            <div className='flex_logo'>
                <Link to='/'>
                    <div>

                        <Huella className='img_nav'/>
                        
                    </div>
                </Link>

                <div className='flex_logo__text'>
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
                    <p>Create dog</p>
                </Link>
            </div>
        </header>
    )
}

export default Navbar;

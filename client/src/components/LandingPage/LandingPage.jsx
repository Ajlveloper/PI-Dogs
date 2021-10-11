import React from 'react'
import { Link } from 'react-router-dom';
import DogRunnig from '../../assets/img/running.mp4'
import './LandingPage.css'

const Start = () => {
    return (
        <div className='back_landing'>
            <div className='landing_general h1_landing'>
                <h1 className='h1_after'>Welcome to SoBeDog</h1>
                <Link className='link_Landing' to='/home'>
                    <h2 className='h2_landing'>Enter</h2>
                </Link>
                <video src={DogRunnig} autoPlay loop muted />
            </div>
        </div>
    )
}

export default Start;
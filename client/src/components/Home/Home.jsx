import React from 'react'
import { Route } from 'react-router-dom';
import Nav from '../Nav/Nav';
import Dogs from '../Dogs/Dogs';
import DogCreate from '../DogCreate/DogCreate';


const Home = () => {
    return (
        <>
            <Nav/>
            <Dogs />
            <Route
                exact
                path='/createDog'
            >
                <DogCreate />
            </Route>
        </>
    )
}

export default Home;

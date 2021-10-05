import React from 'react';
import { Route } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import Home from './components/Home/Home'
import './App.css';
import DogCreate from './components/DogCreate/DogCreate';
import DogDetail from './components/Detail/DogDetail';

function App() {
  return (
    <div>
      <Route
        exact
        path='/'
      >
        <LandingPage />
      </Route>

      <Route
        path='/home'
      >
        <Home />
      </Route>

      <Route
        exact
        path='/createDog'
      >
        <DogCreate />
      </Route>

      <Route
        exact
        path='/detailDog/:idDog'
      >
        <DogDetail />
      </Route>
    </div>
  );
}

export default App;

import React from 'react';
import { Route } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import Home from './components/Home/Home'
import './App.css';

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
        path = '/home'
      >
        <Home />
      </Route>
    </div>
  );
}

export default App;

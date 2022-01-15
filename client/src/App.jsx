import React from "react";
import { Route } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import "./App.css";
import DogCreate from "./components/DogCreate/DogCreate";
import DogDetail from "./components/Detail/DogDetail";
import Home from "./components/Home/Home";
import { LoadingProvider } from "./context/LoadingContext";

function App() {
  return (
    <LoadingProvider>
      <div className="app">
        <Route exact path="/">
          <LandingPage />
        </Route>

        <Route path="/home">
          <Home />
        </Route>

        <Route exact path="/createDog">
          <DogCreate />
        </Route>

        <Route exact path="/detailDog/:idDog">
          <DogDetail />
        </Route>
      </div>
    </LoadingProvider>
  );
}

export default App;

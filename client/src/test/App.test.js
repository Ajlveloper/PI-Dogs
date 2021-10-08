import React from "react";
import { configure, mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import LandingPage from '../components/LandingPage/LandingPage'
import App from "../App";
import Home from "../components/Home/Home";



configure({ adapter: new Adapter() });


describe('App', () => {
  let store;
  const middlewares = [];
  const mockStore = configureStore(middlewares);

  beforeEach(() => {
    store = mockStore([]);
  });

  describe('El componente LandingPage debe renderizar solo en la ruta "/" ', () => {
    it('Debería renderizarse en la ruta "/"', () => {
      const wrapper = mount(
        <Provider store={store}>
          <MemoryRouter initialEntries={["/"]}>
            <App />
          </MemoryRouter>
        </Provider>
      );
      expect(wrapper.find(LandingPage)).toHaveLength(1);
    });

    it('No debería renderizar en otra ruta "/"', () => {
      const wrapper = mount(
        <Provider store={store}>
          <MemoryRouter initialEntries={["/otraRuta"]}>
            <App />
          </MemoryRouter>
        </Provider>
      );
      expect(wrapper.find(LandingPage)).toHaveLength(0);
    });

    it('No renderiza el componente Home en la ruta "/"', () => {
      const wrapper = mount(
        <Provider store={store}>
          <MemoryRouter initialEntries={["/"]}>
            <App />
          </MemoryRouter>
        </Provider>
      );
      expect(wrapper.find(Home)).toHaveLength(0);
    });

  })
});


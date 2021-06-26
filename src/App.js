import { NavigationApp } from "./pages/NavigationApp";
import React from "react";
import {Globalstyle} from "./globalStyles";
import { FilterStatusProvider } from "./contexts/FilterStatusContext";
import {Provider} from 'react-redux';
import store from "./store/store";

export const App = () => (
  <React.Fragment>
    <Globalstyle />
    <Provider store={store}>
      <FilterStatusProvider>
        <NavigationApp />
      </FilterStatusProvider>
    </Provider>
  </React.Fragment>
) 

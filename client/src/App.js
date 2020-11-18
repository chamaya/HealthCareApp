import React from 'react';
import './App.css';
import Home from "./components/home";
import { Provider } from "react-redux";
import store from "./store/store";
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme.js';

let appStore = new store().getStore();

function App() {
  return (
    <div>
      <Provider store = {appStore}>
        <ThemeProvider theme = {theme}>
          <Home></Home>
        </ThemeProvider>
      </Provider>
    </div>
  );
}

export default App;

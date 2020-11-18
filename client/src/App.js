import React from 'react';
import './App.css';
import UserInformation from "./components/userInformation.js"
import StartingForms from "./components/startingforms.js";
import { Provider } from "react-redux";
import store from "./store/store";
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme.js';
import { BrowserRouter, Route } from 'react-router-dom';

let appStore = new store().getStore();

function App() {
  return (
    <div>
      <Provider store = {appStore}>
        <ThemeProvider theme = {theme}>
          <BrowserRouter>
            <Route exact path="/" component = {StartingForms}/>
            <Route path="/userinformation" component = {UserInformation}/>
          </BrowserRouter>
        </ThemeProvider>
      </Provider>
    </div>
  );
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

// Paginas
import App from './App';
import Proj from './Proj';

import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";


ReactDOM.render(
  
    <BrowserRouter >
    <Switch>
      <Route path="/proyectos/:id">			
        		<Proj/>		  
      </Route>
      <Route path="/">
        <App/>
      </Route>
    </Switch>
    </BrowserRouter>,
  
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

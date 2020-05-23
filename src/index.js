import React from "react";
import ReactDOM from "react-dom";
import $ from "jquery";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

import Layout from "./common/Layout";

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

// Paginas
import App from "./App";
import Proj from "./Proj";

import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

const Page404 = ({ location }) => (
  <section>
    <div className=" container-fluid vh-100  d-flex align-items-center margin404 imagen-fondo-404">
      <div className="row w-100">
        <div className="col-6">
          <h1 className="margin404h2">
            <b>404</b>
            <br /> Not Found
          </h1>
        </div>
        <div className="col-6">
          <p className="Fondo404Blanco">
            La página que usted ha solicitado no se encuentra disponible. <br />
            Disculpe las molestias.
          </p>
          <p className="Fondo404Blanco">
            Si esta buscando el tutorial para hacer transmisiones en instagram
            desde PC, lo puede encontrar en nuestro blog.
          </p>
          <a
            className="Fondo404Blanco"
            href="https://www.socialmedia-panama.com/blog/marketing-digital-como-transmitir-en-vivo-en-instagram-desde-pc/7757"
          >
            Transmitir en vivo en instagram desde pc
          </a>
        </div>
      </div>
    </div>
  </section>
);

ReactDOM.render(
  <BrowserRouter basename={"/"}>
    <Layout>
      <Switch>
        <Route exact path="/proyectos/:id" component={Proj} />
        <Route exact path={`${process.env.PUBLIC_URL}/`} component={App} />
        <Route component={Page404} />
      </Switch>
    </Layout>
  </BrowserRouter>,

  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

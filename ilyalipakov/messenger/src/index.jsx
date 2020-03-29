import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Provider} from "react-redux";

import {routes} from "./routes";
import store from "./store.js";

import './index.css';

ReactDOM.render(
                <Provider store={store}>
                  <Router>
                    <Switch>
                      {routes.map((route, index) => <Route key={index} {...route} />)}
                    </Switch>
                  </Router>
                </Provider>,
                document.getElementById("root"));
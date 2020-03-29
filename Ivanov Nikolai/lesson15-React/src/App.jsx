import React, {Component} from 'react';
import './App.scss';
import {BrowserRouter} from 'react-router-dom';
import Router from './common/Router';


export default class App extends Component {

    render() {
        return (
            <BrowserRouter>
                <Router/>
            </BrowserRouter>
        )
    }
}

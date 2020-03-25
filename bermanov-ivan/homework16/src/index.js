import React from 'react';
import ReactDom from 'react-dom';
import {
    BrowserRouter,
    Switch,
    Route,
} from 'react-router-dom';
import { Provider } from 'react-redux';

// import { Layout } from 'components/Layout';
// import { AboutPage } from 'pages/AboutPage';
import { routes } from './routes'
import { store } from './store';

ReactDom.render(
    <Provider store = { store }>
        <BrowserRouter>
            <Switch>
                {/* <Route exact path="/" component = { Layout } />
                <Route exact path="/about" component = { AboutPage } /> */}
                { routes.map((route, index) => <Route { ...route } key = { index } />) }
            </Switch>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
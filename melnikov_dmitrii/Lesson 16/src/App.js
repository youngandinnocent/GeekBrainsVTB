'use strict';

import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Http404 } from './components/pages/Http404';
import LayoutContainer from './containers/LayoutContainer';
import { UserProfile } from './components/pages/UserProfile';

import './static/style.css';
import { store } from '../src/store';


export const App = () => {

    // const autoBotAnswer = () => {
    //     let messages = (currentChatID) ? chats[currentChatID].messages : [];
    //     if (messages.length &&
    //         currentChatID !== null &&
    //         messages[messages.length - 1].author !== 'Bot') {
            
    //         let randomIndex = Math.floor(Math.random() * botMessages.length) + 0;
    //         setTimeout(
    //             () => addMessageInChart(currentChatID, 'Bot', botMessages[randomIndex]),
    //             600
    //         );
    //     }
    // };

    // useEffect(() => {
    //     autoBotAnswer();
    // }, [chats]);

    return <>
        <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={(props) => <LayoutContainer {...props}/>}></Route>
                    <Route path='/chat/:id(\d+)' component={LayoutContainer}></Route>
                    <Route path='/profile' component={UserProfile}></Route>
                    <Route component={Http404}></Route>
                </Switch>
            </BrowserRouter>
        </Provider>
    </>
}

ReactDom.render(
    <App/>,
    document.querySelector('.root')
);
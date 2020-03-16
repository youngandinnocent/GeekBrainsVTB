'use strict';

import React, { useState } from 'react';
import ReactDom from 'react-dom';

import { Messages } from './components/Messages';
import { AddButtonMessage } from './components/AddMessageButton';


const App = () => {
    let [messages, setMessages] = useState([]);

    const addMessage = () => {
        setMessages(messages.concat("New messages"))
    }

    return <>
        <Messages messages={messages}/>
        <AddButtonMessage onAddMessage={addMessage}/>
    </>
}

ReactDom.render(
    <App/>,
    document.querySelector('.root')
);
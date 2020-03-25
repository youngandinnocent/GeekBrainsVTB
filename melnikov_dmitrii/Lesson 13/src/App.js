'use strict';

import React, { useState, useEffect } from 'react';
import ReactDom from 'react-dom';

import { Messages } from './components/Messages';
import { MessageForm } from './components/MessageForm';

import { botMessages } from './helper/botMessages';



const App = () => {
    let [messages, setMessages] = useState([]);
    let [text, setText] = useState('');
    let author = 'Dima';
    
    const addMessage = (botName, botMessage) => {
        setMessages(
            messages.concat(
                {
                    author: botName || author,
                    text: botMessage || text
                }
            )
        );
    };

    const changeText = (evt) => {
        setText(evt.target.value)
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();

        addMessage();
        setText('');
    }

    useEffect(() => {
        if (messages.length && messages[messages.length - 1].author !== 'Bot') {
            let randomIndex = Math.floor(Math.random() * botMessages.length) + 0;
            setTimeout(
                () => addMessage('Bot', botMessages[randomIndex]),
                400
            )
        }

    }, [messages]);

    return <>
        <Messages messages={messages}/>
        <MessageForm handleSubmit={handleSubmit} onChangeText={changeText} text={text}/>
    </>
}

ReactDom.render(
    <App/>,
    document.querySelector('.root')
);
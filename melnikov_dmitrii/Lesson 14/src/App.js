'use strict';

import React, { useState, useEffect } from 'react';
import ReactDom from 'react-dom';
import Container from '@material-ui/core/Container';

import { Layout } from './components/Layout';
import { botMessages } from './helper/botMessages';
import './static/style.css';


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

    const handlePressEnter = (evt) => {
        if (evt.key === 'Enter' && evt.charCode === 13) { // The external check for exploring

            addMessage();
            setText('');
        }
    }

    useEffect(() => {
        if (messages.length && messages[messages.length - 1].author !== 'Bot') {
            let randomIndex = Math.floor(Math.random() * botMessages.length) + 0;
            setTimeout(
                () => addMessage('Bot', botMessages[randomIndex]),
                900
            )
        }

    }, [messages]);

    return <>
        <Container maxWidth="md">
            <Layout    
                handleSubmit={handleSubmit} 
                handlePressEnter={handlePressEnter} 
                onChangeText={changeText}
                messages={messages} 
                text={text}>
            </Layout>
        </Container>
    </>
}

ReactDom.render(
    <App/>,
    document.querySelector('.root')
);
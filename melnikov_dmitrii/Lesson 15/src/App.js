'use strict';

import ReactDom from 'react-dom';
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Layout } from '../src/components/Layout';
import { Http404 } from './components/pages/Http404';
import { UserProfile } from './components/pages/UserProfile';

import './static/style.css';
import { botMessages, chatsData, author } from './helper/testData';


const App = () => {
    let currentChatID = null; 
    let [text, setText] = useState('');
    let [chats, setChats] = useState(chatsData);    

    const addMessageInChart = (chatID, botName, botMessage) => {
        setChats({
            ...chats,
            [chatID]: {
                ...chats[chatID],
                messages: chats[chatID].messages.concat(
                    {
                        author: botName || author,
                        text: botMessage || text
                    }
                )
            }
        });
        setText('');
    };

    const changeText = (evt) => {
        setText(evt.target.value)
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();
        addMessageInChart(currentChatID);
    };

    const handlePressEnter = (evt) => {
        if (evt.key === 'Enter' && evt.charCode === 13) { // The external check for exploring
            addMessageInChart(currentChatID);
        }
    };

    const addNewChat = () => {
        let newChatID = Object.keys(chats).length + 1;
        setChats({
            ...chats,
            [newChatID]: {
                name: 'Новый чат',
                messages: []
            }
        })
    };

    const autoBotAnswer = () => {
        let messages = (currentChatID) ? chats[currentChatID].messages : [];
        if (messages.length &&
            currentChatID !== null &&
            messages[messages.length - 1].author !== 'Bot') {
            
            let randomIndex = Math.floor(Math.random() * botMessages.length) + 0;
            setTimeout(
                () => addMessageInChart(currentChatID, 'Bot', botMessages[randomIndex]),
                600
            );
        }
    };

    useEffect(() => {
        autoBotAnswer();
    }, [chats]);

    const messanger = (props) => {
        let chatID = parseInt(props.match.params.id);
        let messages = (chatID) ? chats[chatID].messages : [];
        currentChatID = chatID;

        return <Layout 
            {...props}
            text={text}
            chats={chats}
            messages={messages}
            onChangeText={changeText}
            onAddNewChat={addNewChat}
            handleSubmit= {handleSubmit}  
            handlePressEnter={handlePressEnter}
        />
    };

    return <>
        <BrowserRouter>
            <Switch>
                <Route exact path='/' render={messanger}></Route>
                <Route path='/chat/:id(\d+)' render={messanger}></Route>
                <Route path='/profile' component={UserProfile}></Route>
                <Route component={Http404}></Route>
            </Switch>
        </BrowserRouter>
        {/* <BrowserRouter>
            <Switch>
                <Route path='*' render={(props) => <Http404 {...props}/>}></Route>
            </Switch>
        </BrowserRouter> */}
    </>
}

ReactDom.render(
    <App/>,
    document.querySelector('.root')
);
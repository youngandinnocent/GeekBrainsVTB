import React, { Component } from 'react';
import { HeaderRedux } from '../Header'
import { ChatList } from '../ChatList'
import { Messenger } from '../Messenger'

import './Layout.scss';

export class Layout extends Component {

    render() {

        const { chats, messages, sendMessage, isLoading, isError } = this.props;

        if (isLoading) {
            return (<div>Loading...</div>);
        }

        if (isError) {
            return (<div>Попробуйте обновить страницу, сервис временно недоступен.</div>);
        }

        return (
            <div className='layout'>
                <HeaderRedux />
                <div className='layout__flex-container'>
                    <ChatList chats={chats} />
                    <Messenger messages={messages} sendMessage={sendMessage} />
                </div>
            </div>
        )
    }
}
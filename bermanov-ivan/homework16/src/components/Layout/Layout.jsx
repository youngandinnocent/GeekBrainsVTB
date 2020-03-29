import React, { Component } from 'react';

import { Header } from 'components/Header';
import { ChatList } from 'components/ChatList';
import { MessageField } from 'components/MessageField';
import './Layout.css';

export class Layout extends Component {

    render() {
        const { chats, messages, sendMessage, addChat } = this.props;
        
        return(
            <div className="layout">
                <Header />
                <div className="body">
                    <ChatList chats = { chats } addChat = { addChat } />
                    <MessageField messages = { messages } sendMessage = { sendMessage } />
                </div>
            </div>
        );
    }
}

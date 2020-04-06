import React, { Component } from 'react';

import { Header } from 'components/Header';
import { ChatList } from 'components/ChatList';
import { MessageField } from 'components/MessageField';
import './Layout.css';

export class Layout extends Component {

    render() {
        const {
            chats,
            messages,
            profileName,
            sendMessage,
            addChat,
            deleteChat,
            blink,
            linkTo
        } = this.props;
        
        return(
            <div className="layout">
                <Header name = { profileName } linkTo = { linkTo } />
                <div className="body">
                    <ChatList
                        chats = { chats }
                        blink = { blink }
                        addChat = { addChat }
                        deleteChat = { deleteChat }
                        linkTo = { linkTo }
                    />
                    <MessageField messages = { messages } sendMessage = { sendMessage } />
                </div>
            </div>
        );
    }
}

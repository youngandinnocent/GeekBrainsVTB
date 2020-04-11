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
            isLoading,
            isError,
            linkTo
        } = this.props;
        
        if (isLoading) {
            return (
                <div>Loading...</div>
            );
        }
        if (isError) {
            return (
                <div>Try reloading the page. Server is not available...</div>
            );
        }
        return(
            <div className="layout">
                <Header name = { profileName } linkTo = { linkTo } />
                <div className="body">
                    <ChatList
                        chats = { chats }
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

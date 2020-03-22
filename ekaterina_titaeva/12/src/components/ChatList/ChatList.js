import React, { Component } from 'react';
import { List } from '@material-ui/core';
import { BrowserRouter } from 'react-router-dom';
import ChatListItem from '../ChatListItem/ChatListItem';

import './ChatList.scss';

export class ChatList extends Component {

    render() {

        const { chats } = this.props;
        return (
            <BrowserRouter>
                <List className="chatList">
                    {chats ? chats.map((chat, index) => <ChatListItem key={index} chat={chat} />) : null}
                </List>
            </BrowserRouter>
        )
    }
}
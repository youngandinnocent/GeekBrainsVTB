import React, { Component } from 'react';
import { List } from '@material-ui/core';
import { BrowserRouter } from 'react-router-dom';
import ChatListItem from '../ChatListItem/ChatListItem';
import ChatForm from '../ChatForm/ChatForm';

import './ChatList.scss';

export class ChatList extends Component {

    render() {

        const { chats } = this.props;
        return (
            // дз: здесь или в chatlistitem добавляем класс через библиотеку classnames (или как там она). через settimeout (секунду-2) снять класс. 
            //то есть вызываем сетстейт, чтобы изменилось состояние и удалился тот класс
            <div className="chatList">
                <BrowserRouter>
                    <List>
                        {chats ? chats.map((chat, index) => <ChatListItem key={index} chat={chat} />) : null}
                    </List>
                </BrowserRouter>
                <ChatForm />
            </div>
        )
    }
}
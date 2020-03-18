import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { List, ListItem } from '@material-ui/core';

import './ChatList.scss';

const chats = ['Стажеры ВТБ', 'Группа 2461', 'Анна', 'Настя', 'Иван Иванов']

export class ChatList extends Component {

    render() {

        return (
            <List className="chatList">
                {chats.map(elem => <ListItem className='listItem'>{elem}</ListItem>)}
            </List>
        )
    }
};
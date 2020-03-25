import React, {Component} from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from "@material-ui/core/Divider";
import './ChatList.css';

export class ChatList extends Component {
    state = { //Добавил массивом объектов пока нет функционала добавления новых чатов
        chats: [
            {
                title: 'Chat1',
                text: 'Some random text here'
            },
            {
                title: 'Chat2',
                text: 'Some random text here'
            },
            {
                title: 'Chat3',
                text: 'Some random text here'
            },
            {
                title: 'Chat4',
                text: 'Some random text here'
            },
        ]
    }

    render() {
        const {chats} = this.state;

        return (
            <List className="chat-list">
                {chats.map((chat, index) => (
                    <div key={index}>
                        <ListItem button className="chat-item">
                            <ListItemText primary={chat.title} secondary={chat.text} />
                        </ListItem>
                        <Divider variant="inset" component="li" />
                    </div>
                ))}
            </List>

        )
    }
}
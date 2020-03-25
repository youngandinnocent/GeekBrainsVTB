
import React, {Component} from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from "@material-ui/core/Divider";
import './Chatlist.scss';

export class Chatlist extends Component {
    state = {
        chats: [
            {
                title: 'Chat1',
                text: 'text text text text text'
            },
            {
                title: 'Chat2',
                text: 'text text text text text'
            },
            {
                title: 'Chat3',
                text: 'text text text text text'
            },
            {
                title: 'Chat4',
                text: 'text text text text text'
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
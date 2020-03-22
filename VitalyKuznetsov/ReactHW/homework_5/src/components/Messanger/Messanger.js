import React, { Component } from 'react';
import MenuAppBar from '../Header/Header';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ForumIcon from '@material-ui/icons/Forum';
import FontAwesome from '../Messanger/addButton/addButton'; 
import DeleteIcon from '@material-ui/icons/Delete';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import SimpleList from '../ChatList/ChatList';
import './Messanger.css';

import { MessageList } from '../MessageList';
import { MessageField } from '../MessageField';
import { ChooseChat } from '../ChooseChat/ChooseChat';
import ChatAddForm from '../ChatAddForm';

export class Messanger extends Component {

    maxId = 5;
    number = 5;
    link = `/chats/${this.number++}`;

// state = {
//     chats: [
//         {
//             id: 1,
//             link: '/chats/1',
//             name: 'Mom',
//             messages: [
//                 {text: 'Welcome to 1st chat', author: 'Robot'}
//             ]
//         },
//         {
//             id: 2,
//             link: '/chats/2',
//             name: 'Best friend',
//             messages: [
//                 {text: 'Welcome to 2st chat', author: 'Robot'}
//             ]
//         },
//         {
//             id: 3,
//             link: '/chats/3',
//             name: 'Grnadma',
//             messages: [
//                 {text: 'Welcome to 3st chat', author: 'Robot'}
//             ]
//         },
//         {
//             id: 4,
//             link: '/chats/4',
//             name: 'Teacher',
//             messages: [
//                 {text: 'Welcome to 4st chat', author: 'Robot'}
//             ]
//         },
//     ]
// }
//
// componentDidUpdate() {
//
//     if(this.messages.length) {
//         const { author } = this.messages[this.messages.length - 1];
//         if(author !== 'Robot') {
//             setTimeout(() => {
//                 this.handleMessageSend({text: `Hi, ${author}! Это автоответ бота`, author: 'Robot'});
//             }, 1000);
//         }
//     } */
// } 
//
// get messages() {
//     const { chats } = this.state;
//     const { match } = this.props;
//
//     let messages = null;
//
//     if(match && chats[match.params.id]) {
//         messages = chats[match.params.id].messages;
//     }
//     
//     return messages;
// }
//
// handleMessageSend = (message) => {
//     const { chats } = this.state;
//     const { match } = this.props;
//     //console.log(match.params.id)
//     
//     const chat = chats[match.params.id];
//     console.log(chat)
//     const messages = this.messages.concat([message]);
//     chat.messages = messages;
//
//     this.setState(() => {
//         return {
//                 chats: [
//                     ...this.state.chats, //wrong need props
//                 ]
//         }
//     }
//     
//     );
// }
//
// robotMessages = () => {
//     this.setState((state) => {
//         return {messages: [...state.messages, {author: 'Robot', text: 'Hello'}],
//         }
//     });
// }

    deleteChat = (id) => {
        
        this.setState(({chats}) => {
            
            const index = chats.findIndex((chat) =>chat.id === id );
            
            const before = chats.slice(0, index);
            const after = chats.slice(index + 1);

            const newArray = [...before, ...after];

            return {
                chats: newArray
            }

        })
    }

    addChat = (text) => {
        const newChat = {
            id: this.maxId++,
            link: this.link,
            name: text,
            messages: [
                {text: `Welcome to ${this.maxId++} chat`, author: 'Robot'}
            ]
        };

        this.setState(({chats}) => {
            const newArr = [
                ...chats,
                newChat
            ];

            return {
                chats: newArr
            }
        })
    }

    render() {

        const { chats, messages, sendMessage } = this.props;

        return (
            <div className='messanger'>
            <MenuAppBar />
            <div className='wrapper'>
                <div  id='simple'>
                    <List component="nav" aria-label="main mailbox folders">
                        {chats.map((chat, index) => <SimpleList {...chat} key={index} onDeleted={this.deleteChat} />)}
                    </List>
                    <ChatAddForm onChatAdded={this.addChat} />
                </div>
                <div className='chat-wrapper'>
                {messages ? <MessageList items={messages} /> : <ChooseChat />}
                {messages && <MessageField onSend={sendMessage} />}
                </div>
                </div>
            </div>
        )
    }
}
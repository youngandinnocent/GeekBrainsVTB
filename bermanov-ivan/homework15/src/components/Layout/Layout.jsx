import React, { Component } from 'react';

import { Header } from 'components/Header';
import { ChatList } from 'components/ChatList';
import { MessageField } from 'components/MessageField';
import './Layout.css';

export class Layout extends Component {

    state = {
        chats: {
            '1': {
                id: 1,
                name: 'GeekBrains.JS+React для молодых специалистов Банка ВТБ (ПАО)',
                messages: [],
                avatarSrc: ''
            },
            '2': {
                id: 2,
                name: 'VTB_Scrubs',
                messages: [],
                avatarSrc: ''
            },
            '3': {
                id: 3,
                name: 'Стажеры ВТБ',
                messages: [],
                avatarSrc: ''
            },
            '4': {
                id: 4,
                name: 'FrontEndDev',
                messages: [],
                avatarSrc: ''
            },
            '5': {
                id: 5,
                name: 'Flutter Mobile Dev | Skill-Branch',
                messages: [],
                avatarSrc: ''
            },
        }
    };

    componentDidUpdate() {
        if (this.messages && this.messages.length) {
            const { author } = this.messages[this.messages.length - 1];
            if (author !== 'NDR-114') {
                setTimeout(() => {
                    if (this.messages[this.messages.length - 1].author !== 'NDR-114') {
                        this.handleMessageSend({
                            author: 'NDR-114',
                            content: `Hello, ${author}, my name is Andrew`
                        });
                    }
                }, 1000);
            }
        }
    }

    get messages() {
        const { chats } = this.state;
        const { match } = this.props;

        let messages = null;

        if (match && chats[match.params.id]) {
            messages = chats[match.params.id].messages;
        }
        return messages;
    }

    handleMessageSend = ({ author, content }) => {
        const { chats } = this.state;
        const { match } = this.props;

        const message = {};
        if (author) {
            message.author = author;
        }
        if (content) {
            message.content = content;
        }

        const chat = chats[match.params.id];
        const messages = [...this.messages, message];

        chat.messages = messages;

        this.setState({
            chats: {
                ...this.state.chats,
                [match.params.id]: chat
            }
        });
    };

    handleChatAdd = (chat) => {
        const { chats } = this.state;
        const index = `${Object.keys(chats).length + 1}`;

        const newChat = {
            id: +index,
            name: chat.name,
            messages: [],
            avatarSrc: chat.src
        };

        this.setState({
            chats: { ...this.state.chats, [index]: newChat }
        });
    }

    render() {
        const { chats } = this.state;
        
        return(
            <div className="layout">
                <Header />
                <div className="body">
                    <ChatList chats = { chats } addChat = { this.handleChatAdd } />
                    <MessageField messages = { this.messages } messageSend = { this.handleMessageSend } />
                </div>
            </div>
        );
    }
}

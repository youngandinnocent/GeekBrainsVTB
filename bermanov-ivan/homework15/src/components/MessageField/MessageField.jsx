import React, { Component } from 'react';

import { ChatList } from 'components/ChatList';
import { MessageForm } from 'components/MessageForm';
import { MessageList } from 'components/MessageList';
import './MessageField.css';

export class MessageField extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        chats: {
            '1': {
                id: 1,
                name: 'GeekBrains.JS+React для молодых специалистов Банка ВТБ (ПАО)',
                messages: [],
                avatarAlt: 'GeekBrains.JS',
                avatarSrc: ''
            },
            '2': {
                id: 2,
                name: 'VTB_Scrubs',
                messages: [],
                avatarAlt: 'VTB_Scrubs',
                avatarSrc: ''
            },
            '3': {
                id: 3,
                name: 'Стажеры ВТБ',
                messages: [],
                avatarAlt: 'Стажеры ВТБ',
                avatarSrc: ''
            },
            '4': {
                id: 4,
                name: 'FrontEndDev',
                messages: [],
                avatarAlt: 'FrontEndDev',
                avatarSrc: ''
            },
            '5': {
                id: 5,
                name: 'Flutter Mobile Dev | Skill-Branch',
                messages: [],
                avatarAlt: 'Flutter',
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
                        // this.setState({
                        //     messages: [
                        //         ...this.state.messages,
                        //         {
                        //             content: `Hello, ${author ? author : 'Author'}, my name is Andrew`,
                        //             author: 'NDR-114'
                        //         }
                        //     ]
                        // });
                        this.handleMessageSend({
                            content: `Hello, ${author ? author : 'Author'}, my name is Andrew`,
                            author: 'NDR-114'
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

    handleMessageSend = (message) => {
        const { chats } = this.state;
        const { match } = this.props;

        const chat = chats[match.params.id];
        const messages = [...this.messages, message];
        // const messages = this.messages.concat([message]);

        chat.messages = messages;

        this.setState({
            chats: {
                ...this.state.chats,
                [match.params.id]: chat
            }
        });
    };

    render() {
        const { chats } = this.state;
        return(
            <div className="body">
                <ChatList chats = { chats } />
                <div className="message-field">
                    { this.messages ? <MessageList messages = { this.messages } /> : <p className="select-chat">Please select chat from list</p> }
                    { this.messages && <MessageForm onSend = { this.handleMessageSend }/> }
                </div>
            </div>
        );
    }
}

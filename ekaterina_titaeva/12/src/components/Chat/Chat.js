import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { MessageList } from '../MessageList';
import { MessageForm } from '../MessageForm';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import SendIcon from '@material-ui/icons/Send';

import './Chat.scss';

export class Chat extends Component {

    state = {
        messageData: []
    };

    componentDidUpdate() {
        if (this.state.messageData.length > 0) {
            let lastAuthor = this.state.messageData[this.state.messageData.length - 1].author;
            if (lastAuthor !== 'Bot')
                this.setState((state) => {
                    return {
                        messageData: [...state.messageData, { author: 'Bot', text: lastAuthor + ', привет! Это бот.' }]
                    }
                });
        }
    }

    handleClick = (message) => {
        this.setState((state) => {
            return {
                messageData: [...state.messageData, message]
            }
        });
    };

    render() {

        const { messageData } = this.state;

        return (
            <div className="chat">
                <MessageList messages={messageData} />
                <MessageForm onSend={this.handleClick} />
            </div>
        )
    }
};
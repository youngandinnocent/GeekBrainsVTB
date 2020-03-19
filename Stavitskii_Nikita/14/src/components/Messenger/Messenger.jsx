import React, {Component} from 'react';
import './Messenger.css';

import {MessageForm} from '../MessageForm';
import {MessageField} from '../MessageField';

export class Messenger extends Component {
    state = {
        messages: [],
    };

    componentDidUpdate() {
        const {author} = this.state.messages[this.state.messages.length - 1];
        if (author !== 'bot') {
            setTimeout(() => {
                if (this.state.messages[this.state.messages.length - 1].author !== 'bot') { //Возможно не самое оптимальное решение
                    this.setState({messages: this.state.messages.concat([{author: 'bot', text: 'Stop bothering me, Im a bot'}])})
                }
            },500)
        }
    }

    handleMessageSend = (message) => {
        this.setState({ messages: [ ...this.state.messages, message ] });
    };

    render() {
        const {messages} = this.state;
        return (
            <div className="messenger">
                <MessageField items={messages} />
                <MessageForm onSend={this.handleMessageSend} new="TestNew" />
            </div>
        );
    }
}
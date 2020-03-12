import React, {Component} from 'react';
import {Message} from './Message';

export class MessageField extends Component {
    state = {
        messages: [],
    };

    componentDidUpdate() {
        const {messages} = this.state;
        const l = messages.length;
        if (!(messages[l - 1].author === 'bot')) {
            setTimeout(() => {
                this.setState({ messages: [...messages, { author: 'bot', text: 'Stop bothering me, Im a bot' }]})
            },500)
        }
    }

    handleMessageSend = (message) => {
        this.setState({ messages: [ ...this.state.messages, message ] });
        console.log(message);
        console.log(this.state.messages)
    };

    render() {
        const messageElements = this.state.messages.map((item, index) => (
            <div key={index}>{item.author}: {item.text}</div>
        ));

        return (
            <div>
                <Message onSend={this.handleMessageSend} new="TestNew" />
                <ul>
                    {messageElements}
                </ul>
            </div>
        )
    }
}
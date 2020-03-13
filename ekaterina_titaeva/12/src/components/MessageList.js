import React, { Component } from 'react';
import { Message } from './Message'

export class MessageList extends Component {

    componentDidUpdate() {
        let {handleAddBot} = this.props;
        if(this.props.messages.length>0) {
            let lastAuthor = this.props.messages[this.props.messages.length - 1].author;
            if (lastAuthor !== 'Bot') {
                handleAddBot('Bot', lastAuthor + ', привет! Это бот.');
            }
        }

    }

    render() {
        const { messages } = this.props;

        return messages.map(elem => <Message dataMessage={elem} />);
    }
};
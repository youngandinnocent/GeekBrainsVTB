import React, { Component } from 'react';
import { Message, messageType } from '../Message'

// import './MessageList.css';

export class MessageList extends Component {
    // static propTypes = {
    //     items: PropTypes.arrayOf(
    //         PropTypes.shape(messageType)
    //     )
    // };

    componentDidUpdate() {
        const { handleAddBot } = this.props;
        if (this.props.messages.length > 0) {
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
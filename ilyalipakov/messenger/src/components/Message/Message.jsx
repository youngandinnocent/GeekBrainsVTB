import React, {Component} from "react";
import ClassNames from 'classnames';

import './message.css';

class Message extends Component {

    constructor(props) {
        super(props);
        const {message} = this.props;

        this.classes = ClassNames('message', {
            'message-owner': message.author !== 'Robot',
            'message-bot': message.author === 'Robot'
        });
    }

    componentDidMount() {
        this._scrollMessage();
    }

    _scrollMessage = () => {
        const lastMessage = this._message;
        const messengerForm = document.querySelector('.messenger-form');
        const messageList = document.querySelector('.message-list');

        const messageYBottom = lastMessage.offsetTop + lastMessage.offsetHeight;
        const formYTop = messengerForm.offsetTop;

        if (messageYBottom >= formYTop) {
            messageList.scrollTo(0, messageYBottom + 10);
        }
    };

    getMessageRef = (node) => this._message = node;

    render() {
        const {message} = this.props;

        return (
            <div className={this.classes} ref={this.getMessageRef}>
                <p className="message__text">{message.message}</p>
                <p className="message__author">{message.author}</p>
            </div>
        );
    }


}

export default Message;
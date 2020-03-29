import React, { Component } from 'react';

import { MessageForm } from 'components/MessageForm';
import { MessageList } from 'components/MessageList';
import './MessageField.css';

export class MessageField extends Component {

  render() {
    const { messages, messageSend } = this.props;

    return(
        <div className="message-field">
            { messages ? <MessageList messages = { messages } /> : <p className="select-chat">Please select chat from list</p> }
            { messages && <MessageForm onSend = { messageSend }/> }
        </div>
    );
  }
}

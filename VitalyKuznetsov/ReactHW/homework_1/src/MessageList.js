import React from 'react';
import Message from './Message';

const MessageList = (props) => {
    return props.messages.map((item, index) => <Message text={item} key={index} />)
}

export default MessageList;
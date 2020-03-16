import React from "react";

import Message from "../Message";

import './MessageList.css';

const MessageList = ({messages}) => {
    const messageList = messages.map((message) => <Message message={message}/>);

    return (
        <div className="message-list">
            {messageList}
        </div>
    )
};

export default MessageList;
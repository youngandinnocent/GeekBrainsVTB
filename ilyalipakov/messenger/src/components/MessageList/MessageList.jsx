import React from "react";

import Message from "../Message";

import './MessageList.css';

const MessageList = ({messages}) => {
    const messageList = messages.map((message, index) => <Message key={index} message={message}/>);

    return (
        <div className="messenger__message-list message-list">
            {messageList}
        </div>
    )
};

export default MessageList;
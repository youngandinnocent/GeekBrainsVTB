import React from "react";

const Message = ({message}) => {
    return (
        <div className="message">
            <span className="message__author">{message.author}: </span>
            <span className="message__text">{message.message}</span>
        </div>
    );
};

export default Message;
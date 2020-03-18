import React from "react";

import Message from "./Message.jsx";

const MessageField = ({messages}) => {
    const messageList = messages.map((message) => <Message message={message}/>);

    return (
        <div className="message-field">
            {messageList}
        </div>
    )
};

export default MessageField;
import React from "react";

const Button = ({handleSendMessage}) => {

    if (typeof handleSendMessage !== 'function') {
        throw new Error('handleSendMessage is not function');
    }

    const sendMessage = () => {
        return handleSendMessage;
    };

    return (
        <>
            <button onClick={sendMessage()}>Отправить</button>
        </>
    );
};

export default Button;
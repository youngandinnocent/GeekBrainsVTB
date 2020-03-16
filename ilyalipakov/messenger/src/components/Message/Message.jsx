import React from "react";
import ClassNames from 'classnames';

import './message.css';

const Message = ({message}) => {

    //Variant 1
    // const direction = () => {
    //     return message.author === 'Bot'? 'start' : 'end';
    // }

    const classes = ClassNames('message', {
        'message-owner': message.author !== 'Robot',
        'message-bot': message.author === 'Robot'
    });

    return (
        <div className={classes}>
            <span className="message__author">{message.author}: </span>
            <span className="message__text">{message.message}</span>
        </div>
    );

    //Variant 1
    // return (
    //     <div className="message" style={{alignSelf: `flex-${direction()}`}}>
    //         <span className="message__author">{message.author}: </span>
    //         <span className="message__text">{message.message}</span>
    //     </div>
    // );
};

export default Message;
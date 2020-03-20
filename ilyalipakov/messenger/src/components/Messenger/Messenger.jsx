import React, {Component, useState} from 'react';

import MessageList from "../MessageList";
import MessengerForm from "../MessengerForm";

import './Messenger.css';

const Messenger = (props) => {
    const {messages} = props;
    return(
      <div className="app__messenger messenger">
          { messages && _renderMessenger({...props}) }
          { !messages && _renderDefault() }
      </div>
    );
};

const _renderMessenger = (props) => {
    const {message, messages, author, handleSendMessage, handleChange} = props;
    return (
      <>
          <MessageList messages={messages}/>
          <MessengerForm
            handleSendMessage={handleSendMessage}
            handleChange={handleChange}
            message={message}
            author={author}  />
      </>
    )
};

const _renderDefault = () => {
    return (
      <div className="messenger__nochat">
          Выберите пожалуйста чат, чтобы начать общаться :)
      </div>);
}


export default Messenger;
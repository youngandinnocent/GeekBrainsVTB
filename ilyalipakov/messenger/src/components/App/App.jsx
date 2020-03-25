import React from 'react';

import MessengerContainer from "../Messenger";
import ChatList from "../ChatList";
import Spinner from "../Spinner";
import Header from "../Header";

import './App.css';
import Main from "../Main";

const App = (props) => {
    const {loading, chats, chatId} = props;
    const chat = chats.find((chat) => chat.id === parseInt(chatId));

    return (
      <div className="app">
        <Header chat={chat} />
        <div className="app__wrapper">
          {!loading ? <RenderUI {...props} /> : <Spinner />}
        </div>
      </div>
    );
};

const RenderUI = (props) => {
  const {chats, messages, chatId} = props;
  return (
    <>
      <Main messages={messages}  chats={chats} chatId={chatId} />
    </>
  )
};

export default App;
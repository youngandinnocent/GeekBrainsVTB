import React from 'react';

import MessengerContainer from "../Messenger";
import ChatList from "../ChatList";
import Spinner from "../Spinner";
import Header from "../Header";

import './App.css';

const App = (props) => {
    const {loading, chats, chatId, current_chat_id} = props;
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
      <ChatList chatId={chatId} chats={chats} />
      <MessengerContainer messages={messages} chatId={chatId} />
    </>
  )
};

export default App;
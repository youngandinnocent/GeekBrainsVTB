import React from 'react';
import MessengerContainer from "../Messenger";
import ChatList from "../ChatList";

const Main = (props) => {
  const {chats, messages, chatId} = props;
  return (
    <>
      <ChatList chats={chats} chatId={chatId} />
      <MessengerContainer messages={messages} chatId={chatId} />
    </>
  )
};

export default Main;

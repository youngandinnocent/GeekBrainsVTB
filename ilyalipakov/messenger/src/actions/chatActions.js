export const LOAD_CHATS = 'LOAD_CHATS';
export const SEND_MESSAGE = 'SEND_MESSAGE';
export const SET_CURRENT_CHAT = 'SET_CURRENT_CHAT';

export const loadChats = () => {
  return {
    type: LOAD_CHATS,
  }
};

export const sendMessage = (message) => {
  return {
    type: SEND_MESSAGE,
    payload: message
  }
};

export const setCurrentChat =(id) => {
  return {
    type: SET_CURRENT_CHAT,
    payload: id
  }
};
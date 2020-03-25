export const LOAD_CHATS = 'LOAD_CHATS';
export const SEND_MESSAGE = 'SEND_MESSAGE';
export const SET_CURRENT_CHAT = 'SET_CURRENT_CHAT';
export const ADD_CHAT = 'ADD_CHAT';
export const DELETE_CHAT = 'DELETE_CHAT';
export const TWINKLE_CHAT = 'TWINKLE_CHAT';

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

export const addChat = (id, name) => {
  return {
    type: ADD_CHAT,
    payload: {id, name}
  }
};

export const deleteChat = (id) => {
  return {
    type: DELETE_CHAT,
    payload: id
  }
};

export const twinkleChat = (id) => {
  return {
    type: TWINKLE_CHAT,
    payload: id
  }
};
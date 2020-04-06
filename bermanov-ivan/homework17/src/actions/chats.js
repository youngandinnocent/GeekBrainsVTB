export const CHATS_LOAD = 'CHATS_LOAD';
export const CHATS_MESSAGE_SEND = 'CHATS_MESSAGE_SEND';
export const CHATS_ADD = 'CHATS_ADD';
export const CHATS_DELETE = 'CHATS_DELETE';

export const chatsLoad = () => ({
    type: CHATS_LOAD
});

export const chatsMessageSend = (message) => ({
    type: CHATS_MESSAGE_SEND,
    payload: message
});

export const chatsAdd = (chat) => ({
    type: CHATS_ADD,
    payload: chat
});

export const chatsDelete = (newState) => ({
    type: CHATS_DELETE,
    payload: newState
});

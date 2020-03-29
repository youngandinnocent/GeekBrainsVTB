export const CHATS_LOAD = 'CHATS_LOAD';
export const CHATS_ADD = 'CHATS_ADD';
export const CHATS_MESSAGE_SEND = 'CHATS_MESSAGE_SEND';

export const chatsLoad = () => ({
    type: CHATS_LOAD
});

export const chatsAdd = (chat) => ({
    type: CHATS_ADD,
    payload: chat
});

export const chatsMessageSend = (message) => ({
    type: CHATS_MESSAGE_SEND,
    payload: message
});

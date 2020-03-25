export const CHATS_LOAD = 'CHATS_LOAD';
export const CHATS_SEND = 'CHATS_SEND';
export const CHATS_ADD = 'CHATS_ADD';
export const CHATS_DELETE = 'CHATS_DELETE';
export const CHATS_ACTIVE = 'CHATS_ACTIVE';
export const CHATS_NOT_ACTIVE = 'CHATS_NOT_ACTIVE';

export const chatsLoad = () => ({
    type: CHATS_LOAD
});

export const chatsSend = (message) => ({
    type: CHATS_SEND,
    payload: message,
});

export const chatsAdd = (name) => ({
    type: CHATS_ADD,
    payload: name,
})

export const chatsDelete = (chatId) => ({
    type: CHATS_DELETE,
    payload: chatId,
})

export const chatsActive = (chatId, isActive) => ({
    type: CHATS_ACTIVE,
    payload: {chatId, isActive},
})

export const chatsNotActive = (chatId, isActive) => ({
    type: CHATS_NOT_ACTIVE,
    payload: {chatId, isActive},
})
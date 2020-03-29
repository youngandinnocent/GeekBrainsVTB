import { createAction } from 'redux-api-middleware';
export const CHATS_LOAD = 'CHATS_LOAD';
export const CHATS_SEND = 'CHATS_SEND';
export const CHAT_SET = 'CHAT_SET';
export const CHAT_ADD = 'CHAT_ADD';
export const CHAT_DELETE = 'CHAT_DELETE';
export const CHAT_FIRE = 'CHAT_FIRE';
export const CHAT_UNFIRE = 'CHAT_UNFIRE';
export const CHATS_REQUEST = 'CHATS_LOAD/CHATS_REQUEST';
export const CHATS_SUCCESS = 'CHATS_LOAD/CHATS_SUCCESS';
export const CHATS_FAILURE = 'CHATS_LOAD/CHATS_FAILURE';

export const chatsLoad = () => ({
    type: CHATS_LOAD
});

export const chatsSend = (message) => ({
    type: CHATS_SEND,
    payload: message
});

export const chatSet = (chatId) => ({
    type: CHAT_SET,
    payload: chatId
});

export const chatAdd = (name) => ({
    type: CHAT_ADD,
    payload: name
});

export const chatDelete = (id) => ({
    type: CHAT_DELETE,
    payload: id
});

export const chatFire = (id) => ({
    type: CHAT_FIRE,
    payload: id
});

export const chatUnfire = (id) => ({
    type: CHAT_UNFIRE,
    payload: id
});

export const chatsLoad2 = () => createAction({
    endpoint: '/api/chats.json',
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    types: [
        CHATS_REQUEST,
        CHATS_SUCCESS,
        CHATS_FAILURE,
    ],
});
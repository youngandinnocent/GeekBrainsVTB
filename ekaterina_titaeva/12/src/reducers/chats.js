import update from 'react-addons-update';
import { CHATS_LOAD, CHATS_SEND, CHAT_SET, CHAT_ADD } from 'actions/chats';

const dataBackend = {
    '1': {
        id: 1,
        name: 'Чат 1',
        messages: [
            { text: 'Это чат №1.', author: 'Bot' },
        ],
    },
    '2': {
        id: 2,
        name: 'Чат 2',
        messages: [
            { text: 'Это чат №2.', author: 'Bot' },
        ],
    },
    '3': {
        id: 3,
        name: 'Чат 3',
        messages: [
            { text: 'Это чат №3.', author: 'Bot' },
        ],
    }
};

const initialState = {
    loading: false,
    entries: {}
};

export const chatsReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHATS_LOAD:
            return {
                ...state,
                entries: dataBackend
            }
        case CHATS_SEND:
            return update(state, {
                entries: {
                    [action.payload.chatId]: {
                        messages: { $push: [{ text: action.payload.text, author: action.payload.author }] }
                    }
                }
            })
        case CHAT_SET:
            return {
                ...state,
                chatId: action.payload
            }
        case CHAT_ADD:
            return {
                ...state,
                entries: {
                    ...state.entries,
                    [Object.keys(state.entries).length + 1]: { id: Object.keys(state.entries).length + 1, name: action.payload.name, messages: [] }
                }
            }
        default:
            return state;
    }
}
import update from 'react-addons-update';
import {
    CHATS_LOAD,
    CHATS_SEND,
    CHAT_SET,
    CHAT_ADD,
    CHAT_DELETE,
    CHAT_FIRE,
    CHAT_UNFIRE
} from 'actions/chats';

const dataBackend = {
    '1': {
        id: 1,
        name: 'Чат 1',
        unread: false,
        messages: [
            { text: 'Это чат №1.', author: 'Bot' },
        ],
    },
    '2': {
        id: 2,
        name: 'Чат 2',
        unread: false,
        messages: [
            { text: 'Это чат №2.', author: 'Bot' },
        ],
    },
    '3': {
        id: 3,
        name: 'Чат 3',
        unread: false,
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
            return update(state, {
                entries: {
                    $merge: {
                        [Object.keys(state.entries).length + 1]: {
                            id: Object.keys(state.entries).length + 1,
                            name: action.payload,
                            messages: []
                        }
                    }
                }
            })
        case CHAT_DELETE:
            return {
                ...state,
                entries: Object.fromEntries(Object.entries(state.entries).filter(([key, value]) => key != action.payload))
            }
        case CHAT_FIRE:
            return update(state, {
                entries: {
                    [action.payload]: {
                        $merge: {
                            unread: true
                        }
                    }
                }
            })
        case CHAT_UNFIRE:
            return update(state, {
                entries: {
                    [action.payload]: {
                        $merge: {
                            unread: false
                        }
                    }
                }
            })
        default:
            return state;
    }
}
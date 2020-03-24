import update from 'react-addons-update';
import {
    CHATS_ADD,
    CHATS_LOAD,
    CHATS_SEND,
    CHATS_DELETE,
    CHATS_ACTIVE,
    CHATS_NOT_ACTIVE,
} from 'actions/chats';

const dataBackend = {
    1: {
        id: 1,
        name: 'chat1',
        messages: [
            {text: 'Это чат №1!', author: 'bot'},
        ],
        isActive: false,
    },
    2: {
        id: 2,
        name: 'chat2',
        messages: [
            {text: 'Привет!!! Это чат №2!', author: 'bot'},
        ],
        isActive: false,
    },
    3: {
        id: 3,
        name: 'chat3',
        messages: [
            {text: 'Привет!!! Это чат №3!', author: 'bot'},
        ],
        isActive: false,
    }
};

const initialState = {
    loading: false,
    entries: []
};

export const chatsReducer = (state = initialState, action) => {
    switch(action.type)
    {
        case CHATS_LOAD:
            const entryData = Array.isArray(state.entries) ? dataBackend : state.entries;
            return {
                ...state,
                entries: entryData,
            }
        case CHATS_SEND:
            return update(state, {
                entries: {
                    [action.payload.chatId]: {
                        messages: {$push: [{text: action.payload.text, author: action.payload.author}]},
                    }
                }
            });
        case CHATS_ADD:
            const newChatId = Object.keys(state.entries).length + 1;
            return update(state, {
                entries: { $merge: {
                    [newChatId]: {
                        id: newChatId,
                        name: action.payload.title,
                        messages: [],
                        isActive: false,
                    }
                }}
            })
        case CHATS_DELETE:
            delete state.entries[action.payload.chatId];
            return state;
        case CHATS_ACTIVE:
             return update(state, {
                 entries: {
                     [action.payload.chatId]: {
                         isActive: {$set: action.payload.isActive}
                     }
                 }
             })
        case CHATS_NOT_ACTIVE:
            return update(state, {
                entries: {
                    [action.payload.chatId]: {
                        isActive: {$set: action.payload.isActive}
                    }
                }
            })
        default: 
            return state;
    }
}
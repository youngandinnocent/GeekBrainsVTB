import update from 'react-addons-update';
import {
    CHATS_ADD,
    CHATS_LOAD,
    CHATS_SEND,
} from 'actions/chats';

const dataBackend = {
    1: {
        id: 1,
        name: 'chat1',
        messages: [
            {text: 'Это чат №1!', author: 'bot'},
        ],
    },
    2: {
        id: 2,
        name: 'chat2',
        messages: [
            {text: 'Привет!!! Это чат №2!', author: 'bot'},
        ],
    },
    3: {
        id: 3,
        name: 'chat3',
        messages: [
            {text: 'Привет!!! Это чат №3!', author: 'bot'},
        ],
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
            return {
                ...state,
                entries: dataBackend,
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
                        messages: []
                    }
                }}
            })
        default: 
            return state;
    }
}
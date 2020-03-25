import update from 'react-addons-update';
import {
    CHATS_LOAD,
    CHATS_SEND
} from 'actions/chats';

const dataBase = {
    '1': {
        id: 1,
        name: 'GeekBrains.JS+React для молодых специалистов Банка ВТБ (ПАО)',
        messages: [],
        avatarSrc: ''
    },
    '2': {
        id: 2,
        name: 'VTB_Scrubs',
        messages: [],
        avatarSrc: ''
    },
    '3': {
        id: 3,
        name: 'Стажеры ВТБ',
        messages: [],
        avatarSrc: ''
    },
    '4': {
        id: 4,
        name: 'FrontEndDev',
        messages: [],
        avatarSrc: ''
    },
    '5': {
        id: 5,
        name: 'Flutter Mobile Dev | Skill-Branch',
        messages: [],
        avatarSrc: ''
    }
};

const initialState = {
    loading: false,
    entries: {}
};

export const chatsReducers = (state = initialState, action) => {
    switch (action.type) {
        case CHATS_LOAD:
            return {
                ...state,
                entries: dataBase
            };
        case CHATS_SEND:
            // return Object.assign({}, state, {
            //     entries: {
            //         [action.payload.chatId]: {
            //             messages: state.entries[action.payload.chatId].messages.concat([{
            //                 content: action.payload.content,
            //                 author: action.payload.author
            //             }])
            //         }
            //     }
            // });
            
            // return {
            //     ...state,
            //     entries: {
            //         ...state.entries,
            //         [action.payload.chatId]: {
            //             ...state.entries[action.paylosd.chatId],
            //             messages: [
            //                 ...state.entries[action.paylosd.chatId].messages,
            //                 { content: action.payload.content ,author: action.payload.author }
            //             ]
            //         }
            //     }
            // };

            return update(state, {
                entries: {
                    [action.payload.chatId]: {
                        messages: { $push: [{ content: action.payload.content ,author: action.payload.author }] }
                    }
                }
            });

        default:
            return state;
    }
}
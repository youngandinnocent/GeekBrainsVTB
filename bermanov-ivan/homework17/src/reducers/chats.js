import update from 'react-addons-update';
import {
    CHATS_LOAD, CHATS_MESSAGE_SEND, CHATS_ADD, CHATS_DELETE
} from 'actions/chats';

const dataBackend = {
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
                entries: dataBackend
            }
        case CHATS_MESSAGE_SEND:
            return update(state, {
                entries: {
                    [action.payload.chatIndex]: {
                        messages: { $push: [
                            {
                                author: action.payload.author,
                                content: action.payload.content,
                                isBlink: action.payload.isBlink
                            }
                        ] }
                    }
                }
            });
        case CHATS_ADD:
            return update(state, {
                entries: { $merge: {
                    [action.payload.newChatIndex]: {
                        id: action.payload.id,
                        name: action.payload.name,
                        messages: action.payload.messages,
                        avatarSrc: action.payload.avatarSrc
                    }
                } }
            });
        case CHATS_DELETE:
            return update(state, { $merge: {
                entries: { ...action.payload.newState }
            } });
        default:
            return state;
    }
};

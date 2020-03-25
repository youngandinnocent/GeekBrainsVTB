import update from 'react-addons-update';
import {
    CHATS_LOAD,
    CHATS_SEND,
} from 'actions/chats';

const dataBackend = {
    chats: [
         {
             id: 1,
             link: '/chats/1',
             name: 'Mom',
             messages: [
                 {text: 'Welcome to 1st chat', author: 'Robot'}
             ]
         },
         {
             id: 2,
             link: '/chats/2',
             name: 'Best friend',
             messages: [
                 {text: 'Welcome to 2st chat', author: 'Robot'}
             ]
         },
         {
             id: 3,
             link: '/chats/3',
             name: 'Grnadma',
             messages: [
                 {text: 'Welcome to 3st chat', author: 'Robot'}
             ]
         },
         {
             id: 4,
             link: '/chats/4',
             name: 'Teacher',
             messages: [
                 {text: 'Welcome to 4st chat', author: 'Robot'}
             ]
         },
     ]
};

const initialState = {
    loading: false,
    entries: {}
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
            //ES5
            // return Object.assign({}, state, {
            //     entries: {
            //         [action.payload.chatId]: {
            //             messages: 
            //             state.entries[action.payload.chatId].messages.concat([{
            //                 text: action.payload.text,
            //                 author: action.payload.author,
            //             }]),
            //         }
            //     }
            // });

            //ES6
            // return {
            //     ...state,
            //     entries: {
            //         ...state.entries,
            //         [action.payload.chatId]: {
            //             ...state.entries[action.payload.chatId],

            //             messages: [
            //                 ...state.entries[action.payload.chatId].messages,
            //                 {text: action.payload.text, author: action.payload.author},
            //             ],

            //         }
            //     }
            // };

            //lib
            return update(state, {
                entries: {
                    [action.payload.chatId]: {
                        messages: {$push: [{text: action.payload.text, author: action.payload.author}]},
                    }
                }
            });
        default: 
            return state;
    }
}
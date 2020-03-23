import { combineReducers } from 'redux';

import { chatsReducers } from './chats';

export const rootReducer = combineReducers({
    chats: chatsReducers
});
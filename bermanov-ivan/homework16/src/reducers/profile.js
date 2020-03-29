import { combineReducers } from 'redux';

import { chatsReducers } from './chats';
import { profileReducers } from './profile';

export const rootReducer = combineReducers({
    chats: chatsReducers,
    profile: profileReducers
});

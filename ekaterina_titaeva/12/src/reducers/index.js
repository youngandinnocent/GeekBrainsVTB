import { combineReducers } from 'redux';
import {connectRouter} from 'connected-react-router';
import { chatsReducer } from './chats';
import { profileReducer } from './profile';

export const rootReducer = combineReducers({
    chats: chatsReducer,
    profile: profileReducer
});

export const initReducer = history => combineReducers({
    router: connectRouter(history),
    chats: chatsReducer,
    profile: profileReducer
});
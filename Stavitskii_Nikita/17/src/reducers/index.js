import {combineReducers} from 'redux';

import {chatsReducer} from './chats';
import {profileReducer} from './profile'
import {connectRouter} from "connected-react-router";

export const rootReducer = combineReducers({
    chats: chatsReducer,
    profile: profileReducer
});

export const initReducer = history => combineReducers({
    router: connectRouter(history),
    chats: chatsReducer,
    profile: profileReducer,
});
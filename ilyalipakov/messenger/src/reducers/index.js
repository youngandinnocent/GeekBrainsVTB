import {combineReducers} from 'redux';

import {chatsReducer} from "./chatsReducer.js";

export default combineReducers({
  chats: chatsReducer
});
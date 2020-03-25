import {combineReducers} from 'redux';

import {chatsReducer} from "./chatsReducer.js";
import {profilesReducer} from "./profilesReducer.js";


export default combineReducers({
  chats: chatsReducer,
  profiles: profilesReducer
});
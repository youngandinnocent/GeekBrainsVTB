import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import { chatsReducers } from './chats';
import { profileReducers } from './profile';

// export const rootReducer = combineReducers({
//     chats: chatsReducers,
//     profile: profileReducers
// });

export const initReducer = (history) => combineReducers({
    router: connectRouter(history),
    chats: chatsReducers,
    profile: profileReducers
});

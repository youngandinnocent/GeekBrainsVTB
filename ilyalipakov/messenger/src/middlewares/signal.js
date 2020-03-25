import {SEND_MESSAGE, twinkleChat} from '../actions/chatActions.js';

export const signal = (store) => (next) => (action) => {
  if (action.type === SEND_MESSAGE) {
    const {chatId, author} = action.payload;

    if (author === 'Robot') {
      const timer = setInterval(() => {
        store.dispatch(twinkleChat(chatId))
      }, 100);

      setTimeout(() => {
        clearInterval(timer);
      }, 1000)
    }
  }

  return next(action);
};
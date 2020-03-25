import {SEND_MESSAGE, sendMessage} from '../actions/chatActions.js';
import {answerRobot} from "../helpers/robot";

export const robotMiddleware = (store) => (next) => (action) => {
  if (action.type === SEND_MESSAGE) {
    const {chatId, author} = action.payload;

    if (author !== 'Robot') {
      setTimeout(() => {
        store.dispatch(sendMessage({chatId, author: 'Robot', message: answerRobot(), isClick: true}));
      }, 1000);
    }
  }

  return next(action);
};
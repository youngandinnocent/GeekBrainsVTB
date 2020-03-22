import {
  LOAD_CHATS,
  SEND_MESSAGE,
  SET_CURRENT_CHAT
} from '../actions/chatActions.js';

const dataBackend = {
  '1': {
    id: 1,
    title: 'VTB',
    messages: []
  },
  '2': {
    id: 2,
    title: 'Football team',
    messages: []
  },
  '3': {
    id: 3,
    title: 'Learn JS',
    messages: []
  },
  '4': {
    id: 4,
    title: 'Moscow',
    messages: []
  }
};

const initialState = {
  entries: {},
  loading: true,
  current_chat_id: null
};

export const chatsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_CHATS:
      return {
        ...state,
        entries: dataBackend,
        loading: false
      };
    case SEND_MESSAGE:
      const {chatId, author, message} = action.payload;
      return {
        ...state,
        entries: {
          ...state.entries,
          [chatId]: {
            ...state.entries[chatId],
            messages: [...state.entries[chatId].messages, {author, message}]
          }
        }
      };
    case SET_CURRENT_CHAT:
      const id = action.payload.chatId;
      return {
        ...state,
        current_chat_id: id
      };
    default:
        return state
  }
};

// TODO: Chats как массив
// case SEND_MESSAGE:
//   const { chatId, author, message, } = action.payload;
//   const idx = state.chats.findIndex(chat => chat.id === chatId);
//   return {
//     ...state,
//     chats: [
//       ...state.chats.slice(0, idx),
//       {
//         ...state.chats[idx],
//         messages: [...state.chats[idx].messages, {author, message}]
//       },
//       ...state.chats.slice(idx + 1)
//     ]
//   };
import {
  LOAD_CHATS,
  SEND_MESSAGE,
  SET_CURRENT_CHAT,
  ADD_CHAT,
  DELETE_CHAT,
  TWINKLE_CHAT
} from '../actions/chatActions.js';

const dataBackend = {
  '1': {
    id: 1,
    title: 'VTB',
    messages: [],
    twinkle: false
  },
  '2': {
    id: 2,
    title: 'Football team',
    messages: [],
    twinkle: false
  },
  '3': {
    id: 3,
    title: 'Learn JS',
    messages: [],
    twinkle: false
  },
  '4': {
    id: 4,
    title: 'Moscow',
    messages: [],
    twinkle: false
  }
};

const initialState = {
  entries: {},
  loading: true,
  isClick: true,
  current_chat_id: null,
};

export const chatsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_CHATS:
      return {
        ...state,
        entries: dataBackend,
        loading: false
      };
    case SEND_MESSAGE: {
      const {chatId, author, message, isClick} = action.payload;
      return {
        ...state,
        entries: {
          ...state.entries,
          [chatId]: {
            ...state.entries[chatId],
            messages: [...state.entries[chatId].messages, {author, message}]
          }
        },
        isClick
      };
    }
    case ADD_CHAT: {
      const {id, name} = action.payload;
      return {
        ...state,
        entries: {
          ...state.entries,
          [id]: {
            id,
            title: name,
            messages: []
          }
        }
      };
    }
    case DELETE_CHAT: {
      const id = action.payload;
      const newState = {
        ...state,
        entries: {
          ...state.entries,
        }
      };
      delete newState.entries[id];
      return newState;
    }
    case SET_CURRENT_CHAT: {
      const id = action.payload.chatId;
      return {
        ...state,
        current_chat_id: id
      };
    }
    case TWINKLE_CHAT: {
      const id = action.payload;
      return {
        ...state,
        entries: {
          ...state.entries,
          [id]: {
            ...state.entries[id],
            twinkle: !state.entries[id].twinkle
          }
        }
      }
    }
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
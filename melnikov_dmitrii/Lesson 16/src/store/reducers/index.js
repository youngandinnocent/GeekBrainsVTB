import { ACTIONS } from '../../constants/actions';
import { chatsData } from '../../helper/testData';


const initialData = {
    chats: chatsData,
    currentChatID: null,
    messages: [],
    text: '',
};

export const reducer = (state=initialData, action) => {
    switch (action.type) {
        case ACTIONS.ADD_NEW_CHAT:
            return {
                ...state,
                chats: {
                    ...state.chats,
                    [action.chatID]: {
                        name: 'Новый чат',
                        messages: []
                    }
                }
            };
        case ACTIONS.UPDATE_CURRENT_CHAT_ID:
            return {
                ...state,
                currentChatID: action.chatID
            }
        case ACTIONS.ADD_NEW_MESSAGE:
            return {
                ...state,
                chats: {
                    ...state.chats,
                    [action.chatID]: {
                        ...state.chats[action.chatID],
                        messages: state.chats[action.chatID].messages.concat(
                            {
                                author: action.author,
                                text: action.text
                            }
                        )
                    }
                }
            }
        case ACTIONS.UPDATE_MESSAGES:
            return {
                ...state,
                messages: action.messages
            }   
        case ACTIONS.CHANGE_MESSAGE_TEXT:
            return {
                ...state,
                text: action.text
            };
        case ACTIONS.CLEAR_MESSAGE_TEXT:
            return {
                ...state,
                text: ''
            }
        default: return state
    }
}
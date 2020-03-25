import { store } from '../index';
import { ACTIONS } from '../../constants/actions';


export const addNewChat = () => ({
    type: ACTIONS.ADD_NEW_CHAT,
    chatID: Object.keys(store.getState().chats).length + 1
})

export const updateMessages = (chatID) => ({
        type: ACTIONS.UPDATE_MESSAGES,
        messages: store.getState().chats[chatID].messages
})

export const updateCurrentChatID = (chatID) => {
    updateMessages(chatID);
    
    return {
        type: ACTIONS.UPDATE_CURRENT_CHAT_ID,
        chatID
    };
}

export const addNewMessageBySubmit = (evt, chatID, author) => {
    evt.preventDefault();
    clearMessageText();
    
    return {
        type: ACTIONS.ADD_NEW_MESSAGE,
        chatID,
        author
    };
}

export const addNewMessageByKeyPress = (evt, chatID, author) => {
    if (evt.key === 'Enter' && evt.charCode === 13) {
        clearMessageText();

        return {
            type: ACTIONS.ADD_NEW_MESSAGE,
            chatID: store.getState().updateCurrentChatID,
            text: store.getState().text,
            author,
        };
    }
}

export const clearMessageText = () => {
    return {
        type: ACTIONS.CLEAR_MESSAGE_TEXT,
        text: ''
    };
}

export const changeMessageText = (evt) => {
    return {
        type: ACTIONS.CHANGE_MESSAGE_TEXT,
        text: evt.target.value
    };
}
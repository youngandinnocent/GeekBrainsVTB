import {CHATS_SEND, chatsSend, chatsActive} from 'actions/chats';

export function messageMiddleware(store) {
    return (next) => (action) => {
        if(action.type === CHATS_SEND){
            const {chatId, author} = action.payload;

            if (author !== 'bot') {
                console.log(action)
                setTimeout(() => {
                    const messages = store.getState().chats.entries[chatId].messages; //other options to get messages?
                    if (messages[messages.length - 1].author !== 'bot') {
                        const isChatActive = true;
                        store.dispatch(chatsSend({author: 'bot', text: 'Stop bothering me, Im a bot', chatId}));
                        store.dispatch(chatsActive(chatId, isChatActive))
                    }
                },1000)
            }
        }
        return next(action);
    }
}
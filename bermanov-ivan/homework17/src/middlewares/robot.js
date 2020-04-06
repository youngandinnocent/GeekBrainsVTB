import { CHATS_MESSAGE_SEND, chatsMessageSend } from 'actions/chats';

export const robotMiddleware = (store) => (next) => (action) => {
    // const prevAction = action;
    // console.log('robotMiddleware prevAction: ', prevAction);
    
    // const prevState = store.getState();
    // console.log('robotMiddleware prevState: ', prevState);

    if (action.type === CHATS_MESSAGE_SEND) {
        const { chatIndex, author } = action.payload;
        if (author !== 'NDR-114') {
            setTimeout(() => {
                store.dispatch(chatsMessageSend({
                    chatIndex,
                    author: 'NDR-114',
                    content: `Hello, ${author}, my name is Andrew`,
                    isBlink: true
                }));
            }, 1000);
        }
    }
    return next(action);
};

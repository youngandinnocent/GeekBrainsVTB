import { CHATS_MESSAGE_SEND, chatsActive, chatsNotActive } from 'actions/chats';

export const chatActiveMiddleware = (store) => (next) => (action) => {
    if (action.type === CHATS_MESSAGE_SEND) {
        next(action);
        const { chatIndex } = action.payload;
        if (store.getState().router.location.pathname !== `/chats/${chatIndex}`) {
            store.dispatch(chatsActive({ chatIndex }));
        }
    } else if (action.type === '@@router/LOCATION_CHANGE') {
        next(action);
        const chatIndex = action.payload.location.pathname.split('/')[2];
        if (typeof chatIndex !== 'undefined') {
            store.dispatch(chatsNotActive({ chatIndex }));
        }
    } else {
        next(action);
    }
};

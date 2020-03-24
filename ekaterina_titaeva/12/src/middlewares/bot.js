import { CHATS_SEND, chatsSend } from 'actions/chats';

export function botMiddleware(store) {
    return function (next) {
        return function (action) {
            if (action.type === CHATS_SEND) {
                const { chatId, author } = action.payload;

                if (author !== 'Bot') {
                    setTimeout(() => {
                        store.dispatch(chatsSend({ chatId, text: `${author}, привет! Это бот.`, author: 'Bot' }));
                    }, 1000);
                }
            }
            return next(action);
        }
    }
}
// дз: action activeChat, когда его вызываем сработает редьюсер который обновит компонент.

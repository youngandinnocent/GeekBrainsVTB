export const CHATS_SEND = 'CHATS_SEND';
export const CHATS_LOAD = 'CHATS_LOAD';

export const chatsLoad = () => ({
    type: CHATS_LOAD // попадаеи в action
}); //action

export const chatsSend = (message) => ({ //message берётся из контейнера
    type: CHATS_SEND,
    payload: message  // пробрасываем сообщение
});//action
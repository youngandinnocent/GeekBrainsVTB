import React from 'react';
import ReactDom from 'react-dom';

let messageData = '';
const messagesData = [];

const Message = ({ content }) => {
    return (
        <div className="greetings">Message content: { content }</div>
    );
};

const MessageList = ({ messages }) => {
    return messages.map((message, index) => (
        <Message key = { index } content = { message }/>)
    );
};

// удалось только в этом инпуте избавиться от дублирования рендера,
// но, кстати, взамен получил неработающее очищение value при отправке сообщения
// не понимаю, почему пропс для инпута из следующего компонента (кнопки),
// не приходит сюда (полагаю, это как-то связано с отсутствием перерендеринга)
const Input = ({ value }) => {
    const handleInput = (event) => {
        messageData = event.target.value;
    };
    return <input onInput = { handleInput } defaultValue = { value } />
};

// не удается избавиться здесь от рендера - не понимаю, как по-другому перерендерить список сообщений
const Button = () => {
    const handleClick = () => {
        messagesData.push(messageData);
        ReactDom.render(
            <div>
                <MessageList messages = { messagesData }/>
                <Button />
                <Input value = '' />
            </div>,
            document.getElementById('root')
        );
    };

    return <button onClick = { handleClick }>Send</button>;
};

ReactDom.render(
    <div>
        <MessageList messages = { messagesData }/>
        <Button />
        <Input />
    </div>,
    document.getElementById('root')
);
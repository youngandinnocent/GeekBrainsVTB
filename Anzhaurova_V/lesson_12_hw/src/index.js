import React from 'react';
import ReactDom from 'react-dom';
let messageData = [];

const MessageList = (props) => {
    return props.messages.map((item, index) => <Message text= {item} key={index} />);
};

const Input = () => {
    return <div><input type="text" id="message-input" placeholder="Введите сообщение"></input></div>
}

const Button = () => {
    const handlerClick = (event)=>{
        messageData.push(document.getElementById("message-input").value);
        console.log(messageData);
         document.getElementById("message-input").value = ""; //обнуляем инпут
    }
    return <button onClick = {handlerClick}>Отправить</button>
}


ReactDom.render(
    <div>
        <Input />
        <Button />
        <MessageList messages = {messageData} />
    </div>,
    document.getElementById('root')
)

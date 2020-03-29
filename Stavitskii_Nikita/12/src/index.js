import React from 'react';
import ReactDom from 'react-dom';
import css from './style.css';

let data = [];

const Button = () => {
    const handleClick = () => {
        const inputElem = document.querySelector('input');
        const now = new Date().toTimeString().split(' ')[0];;
        data.push({
            msg: inputElem.value,
            date: now
        });

        ReactDom.render(
            <Chat />,
            document.getElementById('root')
        );

        inputElem.value = '';
    }

    return <div><button onClick={handleClick}>Send message</button></div>
}

const Messages = (props) => {
    return props.messages.map((item, i) => {
    return <div key={i}>{item.date}: {item.msg}</div>
    })
}

const Chat = () => {
    return (
        <div className="container">
            <input placeholder="Enter your message here"></input>
            <Button />
            <div className="text-container">
                <Messages messages = {data} />
            </div>
        </div>
    )
}

ReactDom.render(
    <Chat />,
    document.getElementById('root')
)
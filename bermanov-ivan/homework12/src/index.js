import React from 'react';
import ReactDom from 'react-dom';

const messages = ['Hello', 'How are you?', 'Nice!', 'How do you do?'];

const MessageComponent = (props) => <div className="element">Message: { props.content }</div>;

const MessageField = (props) => props.messages
    .map((message, index) => <MessageComponent content = { message } key = { index } />);

const Input = (props) => {
    const handleInput = (value) => {
        ReactDom.render(
            <div>
                <Button text = { value }/>
                <Input />
                <MessageField messages = { messages }/>
            </div>,
            document.getElementById('root')
        );
    };

    return <input onInput = { (e) => handleInput(e.target.value) } value = { props.value }></input>
};

const Button = (props) => {
    const handleClick = (message) => {
        messages.push(message);
        ReactDom.render(
            <div>
                <Button />
                <Input value = ''/>
                <MessageField messages = { messages }/>
            </div>,
            document.getElementById('root')
        );
    };

    return <button onClick = { () => handleClick(props.text) }>Send</button>;
};

ReactDom.render(
    <div>
        <Button />
        <Input />
        <MessageField messages = { messages }/>
    </div>,
    document.getElementById('root')
);

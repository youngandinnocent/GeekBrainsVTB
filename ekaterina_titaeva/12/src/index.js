import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { MessageList } from './components/MessageList'

class Chat extends Component {

    state = {
        valueInput: '',
        messageData: ['one', 'two', 'three']
    };

    handeleChange = (event) => {
        this.setState({ valueInput: event.target.value });
    };

    handleClick = () => {
        this.setState((state) => {
            return {
                valueInput: '',
                messageData: [...state.messageData, state.valueInput]
            }
        });
    };

    render() {

        const { valueInput } = this.state;

        return (
            <div>
                <input value={valueInput} onChange={this.handeleChange} placeholder='Введите сообщение'></input>
                <button onClick={this.handleClick}>Добавить</button>
                <MessageList messages={this.state.messageData} />
            </div>
        )
    }
};

ReactDom.render(
    <Chat />,
    document.getElementById('root')
);
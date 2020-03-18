import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Button from "./components/Button.jsx";
import MessageField from "./components/MessageField.jsx";

import {answerRobot} from "./helpers/robot";

class App extends Component {

    componentDidUpdate() {
        if (this.state.messages[this.state.messages.length - 1].author !=='Robot' &&
            this.state.author === '' &&
            this.state.message === '') {
            this.answerRobot();
        }
    }

    state = {
        messages: [
            {
                author: 'Ilya',
                message: 'Hello'
            }
        ],
        message: '',
        author: ''
    };

    handleChange = () => (e) => {
        this.setState(
            {
                [e.target.name]: e.target.value
            }
        );
    };

    handleSendMessage = (message, author) => () => {
        this.setState((state) => {
            return {
                messages: [...state.messages, {author, message}],
                author: '',
                message: ''
            }
        });
    };

    answerRobot = () => {
      setTimeout(() => {
        this.setState((state) => {
            return {
                messages: [...state.messages, {author: 'Robot', message: answerRobot()}],
            }
        });
      },1000);
    };

    render() {
        const {messages, message, author} = this.state;

        return(
            <div>
                <input onChange={this.handleChange()} value={message} name="message" type="text" placeholder="Написать сообщение" />
                <input onChange={this.handleChange()} value={author} name="author" type="text" placeholder="Автор" />
                <Button handleSendMessage={this.handleSendMessage(message, author)}  />
                <hr/>
                <MessageField messages={messages}/>
            </div>
        );
    }
}

ReactDOM.render(<App />,
                document.getElementById("root"));
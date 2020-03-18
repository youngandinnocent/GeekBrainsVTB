import React from 'react';
import Message from './Message';
import '../styles/styles.css';

export default class MessageField extends React.Component {
    state = {
        messages: [{ text: "Привет!", sender: 'bot' }, { text: "Как дела?", sender: 'bot' }],
        input: '',
    };

    componentDidUpdate() {
        if (this.state.messages[this.state.messages.length - 1].sender === 'me') {
            setTimeout(() =>
                    this.setState({
                        messages: [ ...this.state.messages, {text: 'Не приставай ко мне, я робот!', sender: 'bot'} ] }),
                1000);
        }
    }

    handleClick = (message) => {
        this.sendMessage(message)
    };

    handleChange = (event) => {
        this.setState({ input: event.target.value });
    };

    handleKeyUp = (event, message) => {
        if (event.keyCode === 13) { // Enter
            this.sendMessage(message)
        }
    };

    sendMessage = (message) => {
        this.setState({ messages: [ ...this.state.messages, {text: message, sender: 'me'} ] });
    };

    render() {
        const messageElements = this.state.messages.map((message, index) => (
            <Message key={ index } text={ message.text } sender={ message.sender } />));

        return <div className="layout">
            <div className="message-field">
                { messageElements }
            </div>
            <div style={ { width: '100%', display: 'flex' } }>
                <TextField
                    name="input"
                    fullWidth={ true }
                    hintText="Введите сообщение"
                    style={ { fontSize: '22px' } }
                    onChange={ this.handleChange }
                    value={ this.state.input }
                    onKeyUp={ (event) => this.handleKeyUp(event, this.state.input) }
                />
                <FloatingActionButton onClick={ () => this.handleClick(this.state.input) }>
                    <SendIcon />
                </FloatingActionButton>
            </div>

            <input
                style={ { fontSize: '22px' } }
                onChange={ this.handleChange }
                onKeyUp={ (event) => this.handleKeyUp(event, this.state.input) }
            />
            <button
                style={ { fontSize: '22px' } }
                onClick={ () => this.handleClick(this.state.input) }
            >
                Отправить сообщение
            </button>
        </div>
    }
}

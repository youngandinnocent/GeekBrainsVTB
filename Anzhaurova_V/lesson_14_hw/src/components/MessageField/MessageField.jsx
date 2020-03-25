//компонент в котором будет одна кнопка отправки ссобщения и сами сообщения в качестве дочерних элементов
import React, {Component} from 'react';
import {Message} from '../Message';

export class MessageField extends Component {
    state = {
        messages: ["Привет!", "Как дела?"]
    };

    componentDidUpdate() {
        setTimeout(() =>
            this.setState(
                { messages: [ ...this.state.messages, 'Не приставай ко мне, я робот!' ] }), 1000);
    }

handleClick = () => {
        this.setState({ messages: [ ...this.state.messages, 'Нормально' ] });
    };

    render() {
        const messageElements = this.state.messages.map((text, index) => (
            <Message key={ index } text={ text } />));

        return <div>
            { messageElements }
            <button onClick={ this.handleClick }>Отправить сообщение</button>
        </div>
    }
}

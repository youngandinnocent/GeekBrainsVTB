import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class MessageForm extends Component {
    state = {
        author: '',
        content: ''
    };
    
    static propTypes = {
        onSend: PropTypes.func.isRequired
    };

    static defaultProps = {
        onSend: () => {}
    };

    handleInput = (event) => {
        const fieldName = event.target.name;
        this.setState({
            [fieldName]: event.target.value
        });
    };

    handleClick = () => {
        const { onSend } = this.props;
        if (typeof onSend === 'function') {
            onSend(this.state);
            this.setState({
                author: '',
                content: ''
            });
        }
    };

    render() {
        const { author, content } = this.state;

        return (
            <div>
                <div>
                    <input name="author" value = { author } onChange = { this.handleInput } type="text" placeholder="Your name"/>
                </div>
                <div>
                    <textarea name="content" value = { content } onChange = { this.handleInput } type="text" placeholder="Type your message"/>
                </div>
                <div>
                    <button onClick = { this.handleClick }>Send</button>
                </div>
            </div>
        );
    }
}

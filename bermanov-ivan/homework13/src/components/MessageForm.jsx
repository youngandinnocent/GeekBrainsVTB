import React, { Component } from 'react';

export class MessageForm extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        author: '',
        content: ''
    };

    handleInputChange = (event) => {
        const fieldName = event.target.name;
        this.setState({
            [fieldName]: event.target.value
        });
    }

    handleInputSend = () => {
        const { onSend } = this.props;
        if (typeof onSend === 'function') {
            onSend(this.state);
            this.setState({
                author: '',
                content: ''
            });
        }
    }

    render() {
        const { author, content } = this.state;
        return (
            <div>
                <div>
                    <input name="author" value = { author } onChange = { this.handleInputChange } placeholder="Author"/>
                </div>
                <div>
                    <textarea name="content" value = { content } onChange = { this.handleInputChange } placeholder="Content"/>
                </div>
                <button onClick = { this.handleInputSend }>Send</button>
            </div>
        );

    }
}

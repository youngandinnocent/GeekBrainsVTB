import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class MessageForm extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        author: '',
        content: ''
    };

    static propTypes = {
        onSend: PropTypes.func.isRequired,
        // author: PropTypes.string.isRequired,
        // content: PropTypes.string.isRequired
    };

    static defualtProps = {
        onSend: () => {},
        // author: 'Author',
        // content: 'Message'
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
        console.log('form: ', this.props);
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

// Props 2.2 MessageForm - получает пропс (функцию onSend()) от Messanger
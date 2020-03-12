import React, {Component} from 'react';
import PropTypes from 'prop-types';

export class Message extends Component {
    state = {
        author: '',
        text: ''
    };

    static propTypes = {
        text: PropTypes.string,
    };

    static  defaultProps = {
        onSend: () => {},
        author: 'User',
    };

    handleInputChange = (event) => {
        const fieldName = event.target.name;
        this.setState({
            [fieldName]: event.target.value,
        });
    };

    handleInputSend = (e) => {
        const {onSend} = this.props;

        if(typeof onSend === 'function'){
            onSend(this.state);
            this.setState({text: ''});
        }
    };

    render() {
        const {author, text} = this.state;
        return (
            <div>
                <input name="author" type="text" value={author} onChange={this.handleInputChange} /><br />
                <textarea name="text" value={text} onChange={this.handleInputChange} /><br />
                <button onClick={this.handleInputSend}>Send message</button><br />
                <div>{ this.props.text }</div>
            </div>
        )
    }
}
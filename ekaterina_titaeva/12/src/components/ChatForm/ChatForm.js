import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TextField, Button } from '@material-ui/core';
import { chatAdd } from 'actions/chats';

import './ChatForm.scss';

class ChatForm extends Component {

    state = {
        name: ''
    };

    handeleChange = (event) => {
        this.setState({
            name: event.target.value
        });
    };

    handleClick = () => {
        const { addChat } = this.props;

        if (this.state.name !== '') {
            addChat(this.state.name);
            this.setState({ name: '' });
        }
    };

    render() {

        return (
            <div className='chatForm'>
                <TextField className='chatForm__textField' value={this.state.name} label="new chat" name="newChat" id='newChat' onChange={this.handeleChange} />
                <Button variant="contained" color="primary" onClick={this.handleClick}>Создать</Button>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addChat: (name) => dispatch(chatAdd(name))
    }
}

export default connect(null, mapDispatchToProps)(ChatForm);
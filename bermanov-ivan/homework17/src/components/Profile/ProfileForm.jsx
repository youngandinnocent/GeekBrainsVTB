import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';

export class ProfileForm extends Component {
    state = {
        name: '',
        content: '',
        nameError: false,
        contentError: false
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
            [fieldName]: event.target.value,
            [fieldName + 'Error']: !event.target.value
        });
    };

    handleSend = (event) => {
        const { onSend } = this.props;
        if (typeof onSend === 'function') {
            const { name, content } = this.state;
            if (name) {
                onSend(this.state);
                this.setState({
                    name: '',
                    namerError: false,
                    contentError: false
                });
            } else if (content) {
                onSend(this.state);
                this.setState({
                    content: '',
                    namerError: false,
                    contentError: false
                });
            } else {
                this.setState({
                    [event.currentTarget.name + 'Error']: true
                });
            }
        }
    };

    render() {
        const { name, content, nameError, contentError } = this.state;
        return(
            <div className="edit-profile">
                <div className="edit-profile_name">
                    <TextField
                        label="Profile name"
                        name="name"
                        value = { name }
                        error = { nameError }
                        autoFocus
                        onChange = { this.handleInput }
                        variant="outlined"
                    />
                    <Fab
                        name="name"
                        onClick = { this.handleSend }
                        variant="round"
                        color="primary"
                        size="small"
                    ><EditIcon /></Fab>
                </div>
                <div className="edit-profile_content">
                    <TextField
                        className="edit-profile_content-field"
                        label="Something contains"
                        name="content"
                        value = { content }
                        error = { contentError }
                        onChange = { this.handleInput }
                        multiline
                        rows="3"
                        variant="outlined"
                    />
                    <Fab
                        name="content"
                        onClick = { this.handleSend }
                        variant="round"
                        color="primary"
                        size="small"
                    ><EditIcon /></Fab>
                </div>
            </div>
        );
    }
}

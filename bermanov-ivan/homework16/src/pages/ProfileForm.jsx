import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';

export class ProfileForm extends Component {
    state = {
        name: '',
        // content: ''
    };
    
    static propTypes = {
        onSend: PropTypes.func.isRequired
    };

    static defualtProps = {
        onSend: () => {}
    };

    handleInput = (event) => {
        const fieldName = event.target.name;
        this.setState({
            [fieldName]: event.target.value
        });
    };

    handleSend = () => {
        const { onSend } = this.props;
        if (typeof onSend === 'function') {
            onSend(this.state);
            this.setState({
                name: '',
                // content: ''
            });
        }
    };

    render() {
        const { name, content } = this.state;
        return(
            <div className="edit-profile">
                <div className="edit-profile_name">
                    <TextField
                        label="Profile name"
                        name="name"
                        value = { name }
                        autoFocus
                        onChange = { this.handleInput }
                        variant="outlined"
                    />
                    <Fab
                        onClick = { this.handleSend }
                        variant="round"
                        color="primary"
                        size="small"
                    ><EditIcon /></Fab>
                </div>
                {/* <div className="edit-profile_content">
                    <TextField
                        className="edit-profile_content-field"
                        label="Something contains"
                        name="content"
                        value = { content }
                        onChange = { this.handleInput }
                        multiline
                        rows="3"
                        variant="outlined"
                    />
                    <Fab
                        onClick = { this.handleSend }
                        variant="round"
                        color="primary"
                        size="small"
                    ><EditIcon /></Fab>
                </div> */}
            </div>
        );
    }
}

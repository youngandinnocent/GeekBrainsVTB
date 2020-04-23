import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';

export class ProfileForm extends Component {
    state = {
        formData: {
            name: { value: '', error: false },
            description: { value: '', error: false }
        }
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
            formData: {
                ...this.state.formData,
                [fieldName]: { value: event.target.value, error: !event.target.value }
            }
        });
    };

    handleSend = (event) => {
        const { onSend } = this.props;
        if (typeof onSend === 'function') {
            const fieldName = event.currentTarget.name;
            if (this.state.formData[fieldName].value) {
                onSend({
                    [fieldName]: this.state.formData[fieldName].value
                });
                this.setState({
                    formData: {
                        ...this.state.formData,
                        [fieldName]: { ...this.state.formData[fieldName], value: '' }
                    }
                });
            } else {
                this.setState({
                    formData: {
                        ...this.state.formData,
                        [fieldName]: { ...this.state.formData[fieldName], error: true }
                    }
                });
            }
        }
    };

    render() {
        const { name, description } = this.state.formData;

        return(
            <>
                <div className="edit-name">
                    <TextField
                        label="Application name"
                        name="name"
                        value = { name.value }
                        error = { name.error }
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
                <div className="edit-content">
                    <TextField
                        className="edit-content_field"
                        label="Application description"
                        name="description"
                        value = { description.value }
                        error = { description.error }
                        onChange = { this.handleInput }
                        multiline
                        rows="3"
                        variant="outlined"
                    />
                    <Fab
                        name="description"
                        onClick = { this.handleSend }
                        variant="round"
                        color="primary"
                        size="small"
                    ><EditIcon /></Fab>
                </div>
            </>
        );
    }
}

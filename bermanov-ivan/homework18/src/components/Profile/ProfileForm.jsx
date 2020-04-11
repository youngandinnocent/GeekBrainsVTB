import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';

export class ProfileForm extends Component {
    state = {
        formData: [
            { name: '', nameError: false },
            { description: '', descriptionError: false }
        ]
    };

    static propTypes = {
        onSend: PropTypes.func.isRequired
    };

    static defaultProps = {
        onSend: () => {}
    };

    handleInput = (event) => {
        const fieldName = event.target.name;
        if (fieldName === 'name') {
            this.setState({
                formData: [
                {
                    ...this.state.formData[0],
                    [fieldName]: event.target.value,
                    [fieldName + 'Error']: !event.target.value
                },
                { ...this.state.formData[1] }
                ]
            });
        } else {
            this.setState({
                formData: [
                { ...this.state.formData[0] },
                {
                    ...this.state.formData[1],
                    [fieldName]: event.target.value,
                    [fieldName + 'Error']: !event.target.value
                }
                ]
            });
        }
    };

    handleSend = (event) => {
        const { onSend } = this.props;
        if (typeof onSend === 'function') {
            const { name } = this.state.formData[0];
            const { description } = this.state.formData[1];
            if (name && event.currentTarget.name === 'name') {
                onSend({ name });
                this.setState({
                    formData: [
                        { ...this.state.formData[0], name: '' },
                        { ...this.state.formData[1] }
                    ]
                });
            } else if (description && event.currentTarget.name === 'description') {
                onSend({ description });
                this.setState({
                    formData: [
                        { ...this.state.formData[0] },
                        { ...this.state.formData[1], description: '' }
                    ]
                });
            } else {
                if (event.currentTarget.name === 'name') {
                    this.setState({
                        formData: [
                            { ...this.state.formData[0], nameError: true },
                            { ...this.state.formData[1] }
                        ]
                    });
                } else {
                    this.setState({
                        formData: [
                            { ...this.state.formData[0] },
                            { ...this.state.formData[1], descriptionError: true }
                        ]
                    });
                }
            }
        }
    };

    render() {
        const { name, nameError } = this.state.formData[0];
        const { description, descriptionError } = this.state.formData[1];

        return(
            <>
                <div className="edit-name">
                    <TextField
                        label="Application name"
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
                <div className="edit-content">
                    <TextField
                        className="edit-content_field"
                        label="Application description"
                        name="description"
                        value = { description }
                        error = { descriptionError }
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

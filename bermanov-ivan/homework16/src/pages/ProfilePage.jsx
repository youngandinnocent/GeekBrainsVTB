import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Header } from 'components/Header';
import { ProfileForm } from 'pages/ProfileForm';
import './Pages.css';

export class ProfilePage extends Component {

    static propTypes = {
        handleForm: PropTypes.func.isRequired,
        name: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired
    };

    static defaultProps = {
        handleForm: () => {},
        name: '',
        content: ''
    };

    render() {
        const { name, content, handleForm } = this.props;

        return (
            <div className="profile">
                <Header name = { name } />
                <div>
                    <h1>Profile</h1>
                    <p>{ content }</p>
                    <h3>Edit profile</h3>
                    <div>
                        <ProfileForm onSend = { handleForm } />
                    </div>
                </div>
            </div>
        );
    }
}

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Header } from 'components/Header';
import { ProfileForm } from 'components/Profile/ProfileForm';
import './Profile.css';

export class ProfilePage extends Component {

    static propTypes = {
        content: PropTypes.string.isRequired
    };

    static defaultProps = {
        content: ''
    };

    render() {
        const { name, content, handleForm, linkTo } = this.props;

        return (
            <div className="profile">
                <Header name = { name } linkTo = { linkTo } />
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

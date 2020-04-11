import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Header } from 'components/Header';
import { ProfileForm } from 'components/Profile/ProfileForm';
import './Profile.css';

export const contentTypes = {
    content: PropTypes.objectOf(PropTypes.string.isRequired)
};

export class ProfilePage extends Component {
    static propTypes = contentTypes;

    static defaultProps = {
        content: {
            description: 'This is messenger prototype'
        }
    };

    render() {
        const { name, content, handleForm, linkTo, isLoading, isError } = this.props;

        if (isLoading) {
            return (
                <div>Loading...</div>
            );
        }
        if (isError) {
            return (
                <div>Try reloading the page. Server is not available...</div>
            );
        }
        return (
            <div className="profile">
                <Header name = { name } linkTo = { linkTo } />
                <div className="profile-body">
                    <>
                        <h3>Application description</h3>
                        <p>{ content.description }</p>
                        <p><b>Intern: </b>{ content.intern }</p>
                        <p><b>Teacher: </b>{ content.teacher }</p>
                        <p><b>Course: </b>{ content.course }</p>
                        <p><b>School: </b>{ content.school }</p>
                    </>
                    <div className="profile-body_edit">
                        <h3>Edit profile</h3>
                        <ProfileForm onSend = { handleForm } />
                    </div>
                </div>
            </div>
        );
    }
}

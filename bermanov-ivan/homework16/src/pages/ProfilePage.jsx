import React, { Component } from 'react';

import { Header } from 'components/Header';
import { ProfileForm } from 'pages/ProfileForm';
import './Pages.css';

export class ProfilePage extends Component {
    // state = {
    //     name: 'messenger prototype',
    //     content: 'This is super-puper messenger prototype'
    // };

    // handleForm = (newState) => {
    //     this.setState({ name: newState.name });
    // };

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

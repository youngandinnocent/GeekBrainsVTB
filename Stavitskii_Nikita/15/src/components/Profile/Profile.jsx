import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Profile.css';

export class Profile extends Component {
    render() {
        const {name, lastname, age} = this.props.profiles[0];
        return (
            <div className="profile-layout">
                <h2>Profile page</h2>
                <p>Name: {name}</p>
                <p>Lastname: {lastname}</p>
                <p>Age: {age}</p>
                <Link className="profile-link" to="/">Go back to chats</Link>
            </div>
        );
    }
}
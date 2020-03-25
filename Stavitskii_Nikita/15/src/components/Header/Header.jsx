import React, {Component} from "react";
import {Link} from 'react-router-dom'

import './Header.css';

export class Header extends Component {
    render() {
        const {profileName} = this.props;
        return (
            <div className="header">
                <div className="header-list">
                    <Link to="/profile">Profile</Link>
                </div>
                <div className="header-chat">{profileName}</div>
            </div>
        )
    }
}
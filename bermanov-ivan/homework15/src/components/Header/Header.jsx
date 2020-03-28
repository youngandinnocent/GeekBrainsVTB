import React, { Component } from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import { Link } from 'react-router-dom';

import './Header.css';

export class Header extends Component {

    render() {
        return (
            <div className="header">
                <FacebookIcon color="inherit" fontSize="large"/>
                <h1>messenger prototype</h1>
                <div className="header-nav">
                    <Link to="/">chats</Link>
                    <Link to="/profile">profile</Link>
                </div>
            </div>
        );
    } 
}

import React, { Component } from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import { Link } from 'react-router-dom';

import './Header.css';

export class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="header">
                <FacebookIcon color="inherit" fontSize="large"/>
                <h1>messenger</h1>
                <div className="header-nav">
                    <Link to="/">chats</Link>
                    <Link to="/profile">profile</Link>
                    {/* <Link to="/about">about</Link>
                    <Link to="/contacts">contacts</Link> */}
                </div>
            </div>
        );
    }
}
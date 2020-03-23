import React, { Component } from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';

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
            </div>
        );
    }
}
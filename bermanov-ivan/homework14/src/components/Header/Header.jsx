import React, { Component } from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';

import './Header.css';

export class Header extends Component {

    render() {
        return (
            <div className="header">
                <FacebookIcon color="inherit" fontSize="large"/>
                <h1>messenger prototype</h1>
            </div>
        );
    }
}

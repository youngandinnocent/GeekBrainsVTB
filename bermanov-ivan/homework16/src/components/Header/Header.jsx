import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FacebookIcon from '@material-ui/icons/Facebook';
import { Link } from 'react-router-dom';

import './Header.css';

export class Header extends Component {

    static propTypes = {
        name: PropTypes.string.isRequired
    };

    static defaultProps = {
        name: 'messenger prototype'
    };

    render() {
        const { name } = this.props;

        return (
            <div className="header">
                <FacebookIcon color="inherit" fontSize="large"/>
                <h1>{ name }</h1>
                <div className="header-nav">
                    <Link to="/">chats</Link>
                    <Link to="/profile">profile</Link>
                </div>
            </div>
        );
    }
}

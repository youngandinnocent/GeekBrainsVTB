import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ListItemText from '@material-ui/core/ListItemText';
import FacebookIcon from '@material-ui/icons/Facebook';

import './Header.css';

export class Header extends Component {

    static propTypes = {
        linkTo: PropTypes.func.isRequired,
        name: PropTypes.string.isRequired
    };

    static defaultProps = {
        linkTo: () => {},
        name: 'messenger prototype'
    };

    handleClickItem = (link) => {
        const { linkTo } = this.props;
        linkTo(link);
      };

    render() {
        const { name } = this.props;

        return (
            <div className="header">
                <FacebookIcon color="inherit" fontSize="large"/>
                <h1>{ name }</h1>
                <div className="header-nav">
                    <ListItemText primary = "chats" onClick = { () => this.handleClickItem('/') } />
                    <ListItemText primary = "profile" onClick = { () => this.handleClickItem('/profile') } />
                </div>
            </div>
        );
    }
}

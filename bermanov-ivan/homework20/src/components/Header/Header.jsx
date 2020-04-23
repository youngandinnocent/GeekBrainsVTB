import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ListItemText from '@material-ui/core/ListItemText';
import Fab from '@material-ui/core/Fab';
import MenuIcon from '@material-ui/icons/Menu';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import './Header.css';

export class Header extends Component {
    state = {
        chats: true,
        profile: true
    };

    static propTypes = {
        linkTo: PropTypes.func.isRequired,
        name: PropTypes.string.isRequired
    };

    static defaultProps = {                                                                                    
        linkTo: () => {},
        name: 'messenger'
    };

    componentDidUpdate() {
        const { onClickBody } = this.props;
        if ((!this.state.chats || !this.state.profile) && onClickBody) {
            this.setState({
                chats: true,
                profile: true
            });
        }
    }

    handleClickItem = (link) => {
        const { linkTo } = this.props;
        linkTo(link);
    };

    handleClickMobileNav = (event) => {
        const elemName = event.currentTarget.name;
        const { showFunc } = this.props;
        if (elemName === 'chats') {
            showFunc({
                chats: this.state.chats,
            });
            this.setState({
                chats: !this.state.chats,
                profile: true
            });
        } else if (elemName === 'profile') {
            showFunc({
                profile: this.state.profile
            });
            this.setState({
                chats: true,
                profile: !this.state.profile
            });
        }
    };

    render() {
        const { name } = this.props;

        return (
            <div className="header">
                <div className="mobile-nav-chats">
                    <Fab
                        name="chats"
                        variant="extended"
                        color="inherit"
                        size="small"
                        onClick = { this.handleClickMobileNav }
                    ><MenuIcon color="primary" /></Fab>
                </div>
                <div className="logo">
                    <h1>{ name }</h1>
                </div>
                <div className="header-nav">
                    <ListItemText primary = "chats" onClick = { () => this.handleClickItem('/') } />
                    <ListItemText primary = "profile" onClick = { () => this.handleClickItem('/profile') } />
                </div>
                <div className="mobile-nav-profile">
                    <Fab
                        name="profile"
                        variant="extended"
                        color="inherit"
                        size="small"
                        onClick = { this.handleClickMobileNav }
                    ><MoreVertIcon color="primary" /></Fab>
                </div>
            </div>
        );
    }
}

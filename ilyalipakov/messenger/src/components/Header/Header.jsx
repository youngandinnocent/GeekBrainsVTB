import React from "react";

import ChatIcon from '@material-ui/icons/Chat';

import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className='header__logo'>
                <ChatIcon />
            </div>
            <div className='header__title'>Crazy chat</div>
        </header>
    );
};

export default Header;
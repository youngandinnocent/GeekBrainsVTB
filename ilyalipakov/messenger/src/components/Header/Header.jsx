import React from "react";
import {Link} from "react-router-dom";

import ChatIcon from '@material-ui/icons/Chat';

import './Header.css';

const Header = (props) => {
    const {chat} = props;
    return (
        <header className="header">
            <div className='header__logo'>
                <Link to="/profile"><ChatIcon /></Link>
            </div>
            <div className="header__chat-name">
              {chat && chat.title}
            </div>
            <div className='header__title'>Crazy chat</div>
        </header>
    );
};

export default Header;
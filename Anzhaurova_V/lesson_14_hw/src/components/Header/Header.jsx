import React, {Component} from "react";
import './Header.scss';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';

export class Header extends Component{
    render() {
        return(
            <div className="header">
                <div className="header-menu">
                    <IconButton edge="start" className={IconButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                </div>
                <div className="header-search">

                </div>
            </div>
        )
    }
}
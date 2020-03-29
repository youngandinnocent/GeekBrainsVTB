import React, {Component} from "react";
import './Header.css';

export class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="header-list">Some logo or search</div>
                <div className="header-chat">Some chat name</div>
            </div>
        )
    }
}
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Message.css';



export class Message extends Component {


    render() {

        const { author, text } = this.props;

        const classes = classNames('message', {
            'message-owner': author !== 'Robot',
            'message-bot': author === 'Robot'
        });

        return (
            <div className={classes}>
                <div>{text}</div>
                <div className='message-sender'>{author}</div>
            </div>
        )
    }
}

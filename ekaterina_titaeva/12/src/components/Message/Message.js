import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Message.scss';

export const messageType = {
    author: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
};

export class Message extends Component {
    static propTypes = {
        dataMessage: PropTypes.shape(messageType)
    };

    render() {

        const { author, text } = this.props.dataMessage;

        const classes = classNames('message', {
            'message-owner': author !== 'Bot',
            'message-bot': author === 'Bot',
        });

        return (
            <div className={classes}>
                <div>{text}</div>
                <div className='message-sender'>{author}</div>
            </div>
        )
    }
};
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import className from 'classnames';

import './Message.scss';

export const messageType = {
    author: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
};

export class Message extends Component {
    constructor(props) {
        super(props);
    }

    static propTypes = messageType;

    static defaultProps = {
        author: 'Author',
        content: 'Message'
    };

    render() {
        const { author, content } = this.props;
        // console.log('message: ', this.props);
        const classes = className('message', {
            'message-owner': author !== 'NDR-114',
            'message-robot': author === 'NDR-114'
        });

        return (
            <div className = { classes }>
                <div>{ content }</div>
                <div className="message-sender">{ author }</div>
            </div>
        );
    }
}

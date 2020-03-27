import React, { Component } from 'react';
import PropTypes from 'prop-types';

export const messageType = {
    author: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
};

export class Message extends Component {

    static propTypes = messageType;

    static defaultProps = {
        author: 'Author is undefined',
        content: 'Empty message'
    };

    render() {
        const { author, content } = this.props;
        return (
            <li>
                { author }: { content }
            </li>
        );
    }
}

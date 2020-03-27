import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Message extends Component {

    static propTypes = {
        author: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired
    };

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

import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Message extends Component {
    constructor(props) {
        super(props);
    }

    static propTypes = {
        author: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired
    };

    static defualtProps = {
        author: 'Author',
        content: 'Message'
    };

    render() {
        console.log('message: ', this.props); // не понимаю, почему здесь нет дефолтных пропсов...
        const { author, content } = this.props;
        return (
            <div>
                { author }: { content }
            </div>
        );
    }

    // render() {
    //     const { author, content } = this.props;
    //     return (
    //         <div>
    //             {author ? author : 'Author'}: {content ? content : 'Message'}
    //         </div>
    //     );
    // }
}

// Props 3.0 Message - получает пропс message от MessageList
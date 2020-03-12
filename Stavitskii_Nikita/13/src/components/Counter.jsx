import React, {Component} from 'react';

export class Counter extends Component {
    state = {
        counter: 0,
    }

    interval = null;

    componentDidMount() {
        this.interval = setInterval(() => {
            console.log('Get data');
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        const {} = this.state;
        return (
            <div>
            <h1>Counter Component</h1>
            </div>
        )
    }
}
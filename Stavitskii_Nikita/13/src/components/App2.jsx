import React, {Component} from 'react';
import {Counter} from './Counter'

export class App2 extends Component {
    state = {
        isVisible: false,
    }

    handleButtonClick = () => {
        this.setState({
            isVisible: !this.state.isVisible,
        });

    }

    render() {
        const {isVisible} = this.state;

        return (
            <div>
                <h1>Counter</h1>
                <div>
                    {isVisible && <Counter />}
                    <button onClick={this.handleButtonClick}>Hide/show</button>
                </div>
            </div>
        )
    }
}
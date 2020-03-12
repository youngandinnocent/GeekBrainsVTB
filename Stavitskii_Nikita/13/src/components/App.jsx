import React, {Component} from 'react';

export class App extends Component {
    //option 1
    // constructor(props) {
    //     super(props);
    
    // //    this.state = {counter: 0};

    //     this.handlePlus = this.handlePlus.bind(this);
    // }

    //option2
    state = {
        counter: 0,
    }

    handlePlus = (e) => {
        //this.setState({counter: this.state.counter + 1});
        this.setState((prevState) => ({
            counter: prevState.counter + 1
        }), () => {console.log('state updated')})
    }

    handleButtonClick = (action) => () => {
        this.setState((prevState) => ({
            counter: prevState.counter + action
        }))
    }

    //lifecycle methods
    componentDidMount() {
        console.log('mounted');
    }

    componentDidUpdate() {
        console.log('rerendered');
    }

    componentWillUnmount() {
        console.log('removed')
    }

    render() {
        console.log(this.state)
        const {} = this.state;
        return (
            <div>
            <h1>App Component</h1>
            <div>Value: {counter}</div>
            <button onClick={this.handlePlus}>Counter + 1</button>

            <button data-action="1" onClick={this.handlePlus}>Counter + 1</button>
            </div>
        )
    }
}
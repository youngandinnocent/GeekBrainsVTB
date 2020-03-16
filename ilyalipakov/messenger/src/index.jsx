import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Messanger from "./components/Messenger";

class App extends Component {
    render() {
        return (
            <Messanger />
        )
    }
}

ReactDOM.render(<App />,
                document.getElementById("root"));
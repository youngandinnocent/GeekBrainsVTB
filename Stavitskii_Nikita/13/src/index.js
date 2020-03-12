import React from 'react';
import ReactDom from 'react-dom';
import {App} from 'components/app.jsx';
import {App2} from 'components/app.jsx';

//option 1
// const element = React.createElement(
//     'h1',
//     {className: 'test1'},
//     'Hello React!'
// )

// //option 2 jsx
// const elem = (<div className="d1"><h1>Hi, React!</h1><b>JSX</b></div>)

// //func comp
// const messageData = ['All right!', 'Hi!', 'Hello'];

// const Message = (props) => {
//     return (
//         <div>Message text: {props.text}</div>
//     )
// }

// //func comp 2
// const MessageList = (props) => {
//     return props.messages.map((item, index) => <Message text={item} key={index}/>);
// }

// const Button = () => {
//     const handleClick = (event) => {
//         console.log(123)
//     }
//     return <div>Test button: <button onClick={handleClick}>Test</button></div>
// }

ReactDom.render(
    <App />,
    document.getElementById('root'),
)
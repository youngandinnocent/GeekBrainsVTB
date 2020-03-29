import React from 'react';
import ReactDOM from 'react-dom';
import {Layout} from './components/Layout';


// export const MessageList = (props) => {
//     return props.messages.map((item,index) => <Message text ={item} key={index} />)
// }
// MessageList.propTypes = {
//     item: PropTypes.string.isRequired
// }

ReactDOM.render(
    <Layout />,
document.getElementById('root'),
)

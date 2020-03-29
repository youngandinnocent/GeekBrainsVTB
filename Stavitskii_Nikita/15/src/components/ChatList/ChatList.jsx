import React, {Component} from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from "@material-ui/core/Divider";
import AddCircleIcon from '@material-ui/icons/AddCircle';
import {Link} from 'react-router-dom';
import './ChatList.css';
import {ListItemIcon, TextField} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";

export class ChatList extends Component {
    state = {
        title: ''
    }

    static propTypes = {
        onSend: PropTypes.func,
    };

    static defaultProps = {
        onSend: () => {},
    };

    handleChange = (e) => {
        this.setState({title: e.target.value})
    }

    handleAddChat = () => {
        const {addChat} = this.props;
        if (this.state.title.length > 0 && typeof addChat === 'function') {
            addChat(this.state);
            this.setState({title: ''});
        }
    }

    render() {
        const {chats} = this.props;
        const {title} = this.state;
        return (
            <List className="chat-list">
                {chats.map((chat, index) => {
                    let message = chat.messages[chat.messages.length - 1];
                    const secondaryValue = message === undefined ? 'No messages in chat' : (message.author + ': ' + message.text);
                    return (
                        <div key={index}>
                            <Link to={chat.link}>
                                <ListItem button className="chat-item">
                                    <ListItemText primary={chat.name} secondary={secondaryValue}/>
                                </ListItem>
                            </Link>
                            <Divider variant="inset" component="li" />
                        </div>
                    )})}
                <ListItem>
                    <TextField fullWidth name="input" label="Enter new chat name" value={title} onChange={this.handleChange} />
                    <ListItemIcon>
                        {/*<AddCircleIcon onClick={this.handleAddChat} />*/}
                        <Button color="inherit" onClick={this.handleAddChat}><AddCircleIcon /></Button>
                    </ListItemIcon>
                </ListItem>
            </List>

        )
    }
}
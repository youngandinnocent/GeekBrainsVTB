import React, {Component} from 'react';
import './ChatList.scss';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import {Link} from 'react-router-dom';
import ChatIcon from '@material-ui/icons/Chat';
import classNames from 'classnames';
import {bindActionCreators} from "redux";
import connect from "react-redux/es/connect/connect";

class ChatList extends Component {

    render() {
        const {chats, url} = this.props;
        const genItems = (Object.values(chats).map((chat, index) => {
            let classes = classNames('chatlist-item', {chosen: url.slice(6) == index + 1});
            return (
                <ListItem className={classes} key={index}>
                    <Link className="chatlist-link" to={chat.link}>
                        <ListItemAvatar>
                            <Avatar>
                                <ChatIcon/>
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={chat.title} secondary={chat.messageList.length}/>
                    </Link>
                </ListItem>
            )
        }));
        return (
            <List className="chatlist" disablePadding={true}>
                {genItems}
            </List>
        );
    }
}

const mapStateToProps = ({chatReducer}) => ({
    chats: chatReducer.chats
});
const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(ChatList);
import React from 'react';
import PT from 'prop-types';
import { Link } from  'react-router-dom';
import './Chat.css';

import Avatar from "@material-ui/core/Avatar";

const Chat = props => {
    const {name, message, avatar, time} = props;
    return (
        <Link to={`/chat/${name}`}>
            <div className='chat'>
                <Avatar
                    className='chat__user-avatar'
                    alt={name}
                    src={avatar}
                />
                <div className='chat__details'>
                    <h2>{name}</h2>
                    <p>{message}</p>
                </div>
                <p className='chat__time'>{time}</p>
            </div>
        </Link>
    );
};

Chat.propTypes = {
    name: PT.string.isRequired,
    message: PT.string.isRequired,
    avatar: PT.string.isRequired,
    time: PT.string.isRequired,
};

export default Chat;

import React, { useState }from 'react';
import './Chat-Screen.css';
import Avatar from '@material-ui/core/Avatar';
const ChatScreen = () => {
    const [input, setInput] = useState('')
    const [messages, setMessages] = useState(
        [
            {
                id: 0,
                name: `Elon`,
                image: `https://static.theceomagazine.net/wp-content/uploads/2018/10/15093202/elon-musk-1100x733.jpg`,
                message: `Hey there`,
            },
            {
                id: 1,
                name: `Elon`,
                image: `https://static.theceomagazine.net/wp-content/uploads/2018/10/15093202/elon-musk-1100x733.jpg`,
                message: `Hows its going?`,
            },
            {
                id: 11,
                message: `Hi, Nikola`,
            },
            {
                id: 3,
                name: `Elon`,
                image: `https://static.theceomagazine.net/wp-content/uploads/2018/10/15093202/elon-musk-1100x733.jpg`,
                message: `LULW`,
            }
        ]
    )

    const handleSend = evt => {
        evt.preventDefault();

        const messagesCopy = [...messages, {id:Math.random(),message: input}];

        setMessages(messagesCopy);
        setInput('');
    }

    const messagesBlock = messages.map(message => (
        message.name ? (
            <div className='chatScreen__message' key={message.id}>
                <Avatar
                    className='chatScreen__avatar'
                    alt={message.name}
                    src={message.image}
                />
                <p className='chatScreen__text'>
                    {message.message}
                </p>
            </div>)
            :
            (<div className='chatScreen__message' key={message.id}>
                    <p className="chatScreen__text-user">
                        {message.message}
                    </p>
                </div>)
    ))

    return (
        <div className='chatScreen'>
            <p className='chatScreen__timestamp'> YOU MATCHED WITH ALEXANDRA ON 29/03/2018</p>
            {messagesBlock}
            <form className='chatScreen__text-input'>
                <input
                    onChange={ evt => setInput(evt.target.value)}
                    className='chatScreen__input-field'
                    type="text"
                    value={input}
                    placeholder='Type a message...'
                />
                <button
                    onClick={handleSend}
                    className='chatScreen__input-btn'
                    type='submit'>
                    SEND
                </button>
            </form>
        </div>
    );
};

export default ChatScreen;

import React from 'react';
import Chat from './chat/Chat.jsx';

const Chats = () => {
    return (
        <div className='chats'>
            <Chat
                name={'Alexandra'}
                message={'POOQ'}
                avatar={'https://sun9-20.userapi.com/c848536/v848536789/11d61e/7YJCqHdXb_g.jpg'}
                time={'10 minutes ago'}
            />
        </div>
    );
};

export default Chats;

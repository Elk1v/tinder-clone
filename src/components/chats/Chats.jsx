import React from 'react';
import Chat from './chat/Chat.jsx';

const Chats = () => {
    return (
        <div className='chats'>
            <Chat
                name={'Elon'}
                message={'LULW'}
                avatar={'https://static.theceomagazine.net/wp-content/uploads/2018/10/15093202/elon-musk-1100x733.jpg'}
                time={'10 minutes ago'}
            />
        </div>
    );
};

export default Chats;

import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';

import Chats from "../../components/chats/Chats";
import ChatScreen from "../../components/chat-screen/Chat-Screen";
import Header from '../../components/header/Header';
import SwipeButtons from "../../components/swipe-buttons/Swipe-Buttons";
import TinderCards from '../../components/tinder-cards/Tinder-Cards'

const App = () => {
  return(
      <div className='App'>
        <Router >
            <Switch>
                <Route exact path='/chat/:person'>
                    <Header backBtn={'/chats'} />
                    <ChatScreen />
                </Route>
                <Route exact path='/chats'>
                    <Header backBtn={'/'} />
                    <Chats />
                </Route>
                <Route exact path='/'>
                    <Header />
                    <TinderCards />
                    <SwipeButtons />
                </Route>
            </Switch>
        </Router>
      </div>
  )
};

export default App;

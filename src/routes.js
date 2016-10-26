import React                  from 'react';
import { IndexRoute, Route }  from 'react-router';
import App                    from './components/App';
import MainPage               from './components/MainPage';
import ChatPage               from './components/ChatPage';

export default (
  <Route component={App} path='/'>
    <IndexRoute component={MainPage} />
    <Route component={ChatPage} path='chat' />
  </Route>
);

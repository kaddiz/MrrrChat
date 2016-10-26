import React                  from 'react';
import { IndexRoute, Route }  from 'react-router';
import App                    from './components/App';
import MainPage               from './components/MainPage';

export default (
  <Route component={App} path='/'>
    <IndexRoute component={MainPage} />
  </Route>
);

// <IndexRoute component={Comp1} />
// <Route component={Comp2} path='page2' />

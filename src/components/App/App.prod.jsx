import React                from 'react';
import { Link }             from 'react-router';

import './App.scss';

export default class App extends React.Component {
  static propTypes = {
    children: React.PropTypes.node
  };

  render() {
    return (
      <div className='app'>
        <div className='container'>
          {this.props.children}
        </div>
      </div>
    );
  }
}

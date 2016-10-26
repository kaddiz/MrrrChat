import React, { Component, PropTypes } from 'react';
import AppProd from './App.prod';
import DevTools from '../DevTools';

export default class App extends Component {
  static propTypes = {
    children: PropTypes.node
  };

  render() {
    return (
      <AppProd>
        <div>
          {this.props.children}
          <DevTools />
        </div>
      </AppProd>
    );
  }
}

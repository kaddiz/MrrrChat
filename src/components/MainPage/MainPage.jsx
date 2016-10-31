import React from 'react';
import { Link } from 'react-router';

export default class MainPage extends React.Component {
  render() {
    return (
      <div class='container'>
        <h1>Welcome to MrrrChat!</h1>
        <p>Status: 'development'</p>
        <p><Link to='/chat'>Let's start!</Link></p>
      </div>
    );
  }
}

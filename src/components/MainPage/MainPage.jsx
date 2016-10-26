import React from 'react';
import Jumbotron from 'react-bootstrap/lib/Jumbotron';
import Button from 'react-bootstrap/lib/Button';
import { Link } from 'react-router';

export default class MainPage extends React.Component {
  render() {
    return (
      <Jumbotron>
        <h1>Welcome to MrrrChat!</h1>
        <p>Status: 'development'</p>
        <p><Link to='/chat'><Button bsStyle='primary'>Let's start!</Button></Link></p>
      </Jumbotron>
    );
  }
}

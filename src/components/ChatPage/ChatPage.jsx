import React          from 'react';
import io             from 'socket.io-client';
import UserList       from './UserList';
import Chat           from './Chat';
import PageHeader     from 'react-bootstrap/lib/PageHeader';
import Col            from 'react-bootstrap/lib/Col';
import Row            from 'react-bootstrap/lib/Row';

import './ChatPage.scss';

const SOCKET_LOCATION = process.env.NODE_ENV === 'production'
  ? `${window.location.protocol}//${window.location.host}/`
  : 'http://localhost:3000/';

export default class ChatPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      socket: io.connect(SOCKET_LOCATION)
    }
  }

  render() {
    return (
      <div className='chat-page'>
        <h1>MrrrChat</h1>
        <Row className="show-grid">
          <Col xs={12} md={8}><Chat socket={this.state.socket} /></Col>
          <Col xs={12} md={4}><UserList socket={this.state.socket} /></Col>
        </Row>
      </div>
    );
  }
}

// <PageHeader>MrrrChat <small>Just choose a room</small></PageHeader>

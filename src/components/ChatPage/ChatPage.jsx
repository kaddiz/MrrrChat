import React from 'react';
import RoomList from './RoomList';
import Chat from './Chat';
import PageHeader from 'react-bootstrap/lib/PageHeader';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';

import './ChatPage.scss';

export default class ChatPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='chat-page'>
        <h1>MrrrChat</h1>
        <Row className="show-grid">
          <Col xs={12} md={8}><Chat /></Col>
          <Col xs={12} md={4}><RoomList /></Col>
        </Row>
      </div>
    );
  }
}

// <PageHeader>MrrrChat <small>Just choose a room</small></PageHeader>

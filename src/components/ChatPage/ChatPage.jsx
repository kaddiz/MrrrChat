import React from 'react';
import RoomList from './RoomList';
import PageHeader from 'react-bootstrap/lib/PageHeader';

import './ChatPage.scss';

export default class ChatPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='chat-page'>
        <PageHeader>MrrrChat <small>Just choose a room</small></PageHeader>
        <RoomList />
      </div>
    );
  }
}

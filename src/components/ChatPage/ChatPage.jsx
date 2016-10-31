import React          from 'react';
import io             from 'socket.io-client';
import UserList       from './UserList';
import Chat           from './Chat';

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
        <div className="row row--no-gutter">
          <div className='col col--8-of-12'><Chat socket={this.state.socket} /></div>
          <div className='col col--4-of-12'><UserList socket={this.state.socket} /></div>
        </div>
      </div>
    );
  }
}

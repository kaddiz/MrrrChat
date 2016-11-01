import React          from 'react';
import Paper          from 'material-ui/Paper';
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
          <div className="row row--no-gutter">
            <div className='col col--8-of-12'><Chat socket={this.state.socket} /></div>
            <div className='col col--4-of-12'><UserList socket={this.state.socket} /></div>
          </div>
      </div>
    );
  }
}

// <Paper className='chat-page' zDepth={1} rounded={false}>




// </Paper>

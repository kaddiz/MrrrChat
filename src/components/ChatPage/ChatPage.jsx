import React          from 'react';
import Paper          from 'material-ui/Paper';
import RoomList       from './RoomList';
import Chat           from './Chat';

import './ChatPage.scss';

export default class ChatPage extends React.Component {
  render() {
    return (
      <div className='chat-page'>
          <div className="row row--no-gutter">
            <div className='col col--4-of-5'><Chat /></div>
            <div className='col col--1-of-5'><RoomList /></div>
          </div>
      </div>
    );
  }
}

// <Paper className='chat-page' zDepth={1} rounded={false}>




// </Paper>

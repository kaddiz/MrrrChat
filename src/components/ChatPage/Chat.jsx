import React           from 'react';
import { connect }     from 'react-redux';
import io              from 'socket.io-client';
import ListGroup       from 'react-bootstrap/lib/ListGroup';
import ListGroupItem   from 'react-bootstrap/lib/ListGroupItem';
import Panel           from 'react-bootstrap/lib/Panel';
import FormGroup       from 'react-bootstrap/lib/FormGroup';
import FormControl     from 'react-bootstrap/lib/FormControl';
import Button          from 'react-bootstrap/lib/Button';
import Message         from './Message';
import { getMessages } from '../../redux/actions/ChatActions';

import './Chat.scss';

var socket, locationForSocket;

if (process.env.NODE_ENV === 'production') {
  locationForSocket = `${window.location.protocol}//${window.location.host}/`;
  socket = io.connect(locationForSocket);
} else {
  locationForSocket = 'http://localhost:3000/';
  socket = io.connect(locationForSocket);//, {'transports': ['xhr-polling']});
}
var USER_NAME = '';
socket.on('user:name', userName => {
  USER_NAME = userName;
});

class Chat extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: [],
      msg: '',
      name: USER_NAME,
      id: Date.now() + Math.random()
    }
  }

  componentDidUpdate() {
    var chat = document.getElementById('chat');
    chat.scrollTop = chat.scrollHeight;
  }

  componentDidMount() {
    socket.on('message', this.handleChatMessages);
    this.props.dispatch(getMessages());
    this.setState({
      name: USER_NAME
    });
  }

  handleChatMessages = (message) => {
    this.setState({
      messages: this.state.messages.concat(message),
    });
  }

  handleMessageChange = (e) => {
    this.setState({
      msg: e.target.value
    });
  }

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.handleSendClick(e);
    }
  }

  handleSendClick = (e) => {
    let message = {
      id: this.state.id,
      name: this.state.name,
      msg: this.state.msg.trim(),
      time: new Date()
    }
    if (this.state.msg.trim() === '' | '\n') {
      this.setState({
        msg: ''
      });
      return false;
    }
    socket.emit('message', message);
    this.setState({
      msg: ''
    });
  }

  render() {
    var chatName = 'Default';
    return (
      <div className='chat'>
        <Panel header={'Room: ' + chatName} footer={'Name: ' + this.state.name} bsStyle='primary'>
          <ListGroup fill id='chat'>
          {
            this.state.messages.length > 0 ?
            this.state.messages.map((message) => {
              return <Message
                  key={Math.random()}
                  name={message.name}
                  time={typeof message.time === Date ? message.time.toLocaleTimeString() : message.time}
                  msg={message.msg}
                />;
            }) : <ListGroupItem>Empty message list...</ListGroupItem>
          }
          </ListGroup>
          <div className='send-message'>
            <form>
              <FormControl
                id='textarea'
                componentClass="textarea"
                placeholder="Type message..."
                onChange={this.handleMessageChange}
                onKeyPress={this.handleKeyPress}
                value={this.state.msg}
              />
              <Button bsStyle='primary' onClick={this.handleSendClick}>Send</Button>
            </form>
          </div>
        </Panel>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { id, name, msg, time } = state.chat;

  return { id, name, msg, time };
}

export default connect(mapStateToProps)(Chat);

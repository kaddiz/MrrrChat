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

var pathForSocket = 'http://localhost:3000';

if (process.env.NODE_ENV == 'production')
  pathForSocket = 'https://mrrrchat.herokuapp.com:3000';

var socket = io.connect(pathForSocket);//, {'transports': ['xhr-polling']});

class Chat extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: [],
      msg: '',
      name: '',
      id: Date.now() + Math.random()
    }
  }

  componentDidUpdate() {
    var chat = document.getElementById('chat');
    chat.scrollTop = chat.scrollHeight;
  }

  componentDidMount() {
    socket.on('user:join', this.handleChatMessages);
    socket.on('message', this.handleChatMessages);
    socket.on('server:name', name => { this.setState({ name: name }) });
    this.props.dispatch(getMessages());
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
    var now = new Date();
    let message = {
      id: this.state.id,
      name: this.state.name,
      msg: this.state.msg.trim(),
      time: now.toLocaleTimeString()
    };
    document.getElementById('textarea').value = '';
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
        <Panel header={chatName} bsStyle='primary'>
          <ListGroup fill id='chat'>
          {
            this.state.messages.length > 0 ?
            this.state.messages.map((message) => {
              return <Message key={Math.random()} name={message.name} time={message.time} msg={message.msg} />;
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
                value={this.state.msg} />
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

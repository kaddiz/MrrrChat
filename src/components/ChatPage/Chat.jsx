import React           from 'react';
import { connect }     from 'react-redux';
import ListGroup       from 'react-bootstrap/lib/ListGroup';
import ListGroupItem   from 'react-bootstrap/lib/ListGroupItem';
import Panel           from 'react-bootstrap/lib/Panel';
import FormGroup       from 'react-bootstrap/lib/FormGroup';
import FormControl     from 'react-bootstrap/lib/FormControl';
import Button          from 'react-bootstrap/lib/Button';
import Message         from './Message';
import {
  setDefaultProps,
  getMessages,
  addNewMessage
}                      from '../../redux/actions/ChatActions';

import './Chat.scss';

class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messageText: ''
    }
  }

  componentWillMount() {
    if (this.props.id === 0) {
      this.props.socket.emit('user:name');
      this.props.socket.on('user:name', userName => {
        this.props.dispatch(
          setDefaultProps(
            Date.now() + Math.random(),
            userName
          )
        );
      });
    }
  }

  componentDidMount() {
    this.props.socket.on('message', this.handleChatMessages);
  }

  componentDidUpdate() {
    var chat = document.getElementById('chat');
    if (chat) chat.scrollTop = chat.scrollHeight;
  }

  handleChatMessages = (message) => {
    const NOW = new Date();
    this.props.dispatch(addNewMessage(
      {...message, time: NOW.toLocaleTimeString() }
    ));
  }

  handleMessageChange = (e) => {
    this.setState({
      messageText: e.target.value
    });
  }

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.handleSendClick(e);
    }
  }

  handleSendClick = (e) => {
    e.preventDefault();
    const NOW = new Date();
    let message = {
      id: this.props.id,
      name: this.props.userName,
      msg: this.state.messageText.trim(),
      time: NOW.toLocaleTimeString()
    }
    if (this.state.messageText.trim() === '' | '\n') {
      this.setState({
        messageText: ''
      });
      return false;
    }
    this.props.socket.emit('message', message);
    this.setState({
      messageText: ''
    });
  }

  render() {
    return (
      <div className='chat'>
        <Panel header={'Room: ' + this.props.room} footer={'Name: ' + this.props.userName} bsStyle='primary'>
          <ListGroup fill id='chat'>
          {
            this.props.messages.length > 0 ?
            this.props.messages.map((message) => {
              return <Message
                  key={Math.random()}
                  name={message.name}
                  time={message.time}
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
                value={this.state.messageText}
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
  const { id, userName, messages, room } = state.chat;

  return { id, userName, messages, room };
}

export default connect(mapStateToProps)(Chat);

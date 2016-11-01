import React            from 'react';
import { connect }      from 'react-redux';
import io               from 'socket.io-client';
import {List, ListItem} from 'material-ui/List';
import TextField        from 'material-ui/TextField';
import RaisedButton     from 'material-ui/RaisedButton';
import Paper            from 'material-ui/Paper';
import Message          from './Message';
import {
  setDefaultProps,
  getMessages,
  addNewMessage
}                       from '../../redux/actions/ChatActions';

const SOCKET_LOCATION = process.env.NODE_ENV === 'production'
  ? `${window.location.protocol}//${window.location.host}/`
  : 'http://localhost:3000/';

import './Chat.scss';

const style = {
  roomName: {
    margin: 0,
    paddingTop: 10,
    paddingLeft: 15,
    paddingBottom: 10,
    backgroundColor: '#42A5F5',//'#00BCD4',
    color: '#fff'
  },
  textField: {
    width: '96%',
    marginLeft: '2%',
    // marginTop: 10
  },
  sendButton: {
    position: 'absolute',
    top: 74,
    right: 10
  },
  messageList: {
    height: '380px',
    overflow: 'auto'
  }
}

class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      socket: io.connect(SOCKET_LOCATION),
      messageText: ''
    }
    this.state.socket.emit('user:name');
  }

  componentWillMount() {
    if (this.props.id === 0) {
      this.state.socket.on('user:name', userName => {
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
    this.state.socket.on('message', this.handleChatMessages);
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
    this.state.socket.emit('message', message);
    this.setState({
      messageText: ''
    });
  }

  render() {
    return (
      <div className='chat'>
        <Paper zDepth={1} rounded={false} style={{backgroundColor: '#FAFAFA'}}>
          <h2 style={style.roomName}>Room: {this.props.room}</h2>
          <List id='chat' style={style.messageList}>
          {
            this.props.messages.length > 0 ?
            this.props.messages.map((message) => {
              return <Message
                  key={Math.random()}
                  name={message.name}
                  time={message.time}
                  msg={message.msg}
                />;
            }) : <ListItem>Empty message list...</ListItem>
          }
          </List>
          <div className='send-message'>
            <TextField
              style={style.textField}
              floatingLabelText="Type message..."
              multiLine={true}
              rowsMax={3}
              fullWidth={true}
              onChange={this.handleMessageChange}
              onKeyPress={this.handleKeyPress}
              value={this.state.messageText}
            />
            <RaisedButton
              style={style.sendButton}
              label="Send"
              primary={true}
              href='/chat'
              onClick={this.handleSendClick}
            />
          </div>
        </Paper>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { id, userName, messages, room } = state.chat;

  return { id, userName, messages, room };
}

export default connect(mapStateToProps)(Chat);

import React          from 'react';
import { connect }    from 'react-redux';
import ListGroup      from 'react-bootstrap/lib/ListGroup';
import ListGroupItem  from 'react-bootstrap/lib/ListGroupItem';
import Panel          from 'react-bootstrap/lib/Panel';
import FormControl    from 'react-bootstrap/lib/FormControl';
import Button         from 'react-bootstrap/lib/Button';

import Message        from './Message';

import getMessages   from 'redux/actions/ChatActions';

import './Chat.scss';

class Chat extends React.Component {
  constructor(props) {
    super(props);

    this.state = { messages: [] }
  }

  componentDidMount() {

    socket.on('user:join', (data) => {
        let message = {
          id: Date.now(),
          name: 'System',
          msg: `User ${data.name} has joined.`,
          time: data.time
        };
        setState({
          messages: messages.push(message)
        });
    });

    this.props.dispatch(getMessages());
  }

  render() {
    var chatName = 'Default';

    return (
      <div className='chat'>
        <Panel header={chatName} bsStyle='primary'>
          <ListGroup fill>
          {
            this.state.messages.map((message) => {
              return <Message id={message.id} name={message.name} time={message.time} msg={message.msg} />
            })
          }
          </ListGroup>
          <div className='send-message'>
            <FormControl componentClass="textarea" placeholder="Type message..." />
            <Button bsStyle='primary'>Send</Button>
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

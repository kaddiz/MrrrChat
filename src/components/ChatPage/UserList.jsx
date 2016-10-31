import React from 'react';
import ListGroup from 'react-bootstrap/lib/ListGroup';
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';
import Panel from 'react-bootstrap/lib/Panel';

export default class UserList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: []
    }
  }

  componentWillMount() {
    this.props.socket.emit('user:list');
    this.props.socket.on('user:list', this.handleUserList);
  }

  handleUserList = (userList) => {
    this.setState({
      users: userList
    });
  }

  render() {
    return (
      <div className='user-list'>
        <Panel header='User list' bsStyle='primary'>
          <ListGroup fill>
          {
            this.state.users.map((item, index) => {
              return <ListGroupItem key={index}>{item}</ListGroupItem>;
            })
          }
          </ListGroup>
        </Panel>
      </div>
    );
  }
}

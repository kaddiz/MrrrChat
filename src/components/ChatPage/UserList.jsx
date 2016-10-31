import React           from 'react';
import { connect }     from 'react-redux';
import ListGroup       from 'react-bootstrap/lib/ListGroup';
import ListGroupItem   from 'react-bootstrap/lib/ListGroupItem';
import Panel           from 'react-bootstrap/lib/Panel';
import {
  setUserList,
  getUserList
}                      from '../../redux/actions/UserListActions';

class UserList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.socket.emit('user:list');
    this.props.socket.on('user:list', this.handleUserList);
  }

  handleUserList = (userList) => {
    this.props.dispatch(setUserList(userList));
  }

  render() {
    return (
      <div className='user-list'>
        <Panel header='User list' bsStyle='primary'>
          <ListGroup fill>
          {
            this.props.users.length > 0 ?
            this.props.users.map((userName, index) => {
              return <ListGroupItem key={index}>{userName}</ListGroupItem>;
            }) : <ListGroupItem>Empty user list...</ListGroupItem>
          }
          </ListGroup>
        </Panel>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { users } = state.users;

  return { users };
}

export default connect(mapStateToProps)(UserList);

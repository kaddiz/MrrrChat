import React           from 'react';
import { connect }     from 'react-redux';
import {
  setUserList,
  getUserList
}                      from '../../redux/actions/UserListActions';

export default class UserList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='user-list'>

      </div>
    );
  }
}

import { combineReducers }  from 'redux';
import ChatReducer          from './ChatReducer';
import UserListReducer      from './UserListReducer';

export default combineReducers({
  chat: ChatReducer,
  users: UserListReducer
});

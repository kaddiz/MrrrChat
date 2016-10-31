import {
  SET_USER_LIST,
  GET_USER_LIST
} from '../actions/UserListActions';

const initialState = [];

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_USER_LIST:
      return action.payload;

    case GET_USER_LIST:
      return state;

    default:
      return state;
  }
}

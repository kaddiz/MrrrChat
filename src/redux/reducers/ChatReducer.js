import io from 'socket.io-client';
import {
  SET_DEFAULT_PROPS,
  GET_MESSAGES,
  ADD_NEW_MESSAGE
} from '../actions/ChatActions';

const initialState = {
   id: 0,
   userName: 'USER_NAME',
   room: 'Default',
   messages: []
 };

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_DEFAULT_PROPS:
      return {...state,	userName:	action.payload.name, id: action.payload.id}

    case GET_MESSAGES:
      return state;

    case ADD_NEW_MESSAGE:
      return {...state, messages: state.messages.concat(action.payload) }

    default:
      return state;
  }
}

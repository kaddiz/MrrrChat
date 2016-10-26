import { GET_MESSAGES } from '../actions/ChatActions';

const initialState = [{
   id: 0,
   name: 'NAME',
   msg: '',
   time: 0
 }];

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_MESSAGES:
      return state;
    default:
      return state;
  }
}

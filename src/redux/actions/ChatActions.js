export const SET_DEFAULT_PROPS = 'SET_DEFAULT_PROPS';
export const GET_MESSAGES      = 'GET_MESSAGES';
export const ADD_NEW_MESSAGE   = 'ADD_NEW_MESSAGE';

export function setDefaultProps(id, name) {
  return { type: SET_DEFAULT_PROPS, payload: {id, name}};
}

export function getMessages() {
  var message;

  return { type: GET_MESSAGES, payload: message };
}

export function addNewMessage(message) {
  return { type: ADD_NEW_MESSAGE, payload: message };
}

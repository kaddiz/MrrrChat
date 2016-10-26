export const GET_MESSAGES = 'GET_MESSAGES';

export function getMessages() {
  var message;
  
  return { type: GET_MESSAGES, payload: message };
}

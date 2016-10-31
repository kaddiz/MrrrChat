export const SET_USER_LIST = 'SET_USER_LIST';
export const GET_USER_LIST = 'GET_USER_LIST';

export function setUserList(userList) {
  return { type: SET_USER_LIST, payload: userList };
}

export function getUserList() {
  return { type: GET_USER_LIST };
}

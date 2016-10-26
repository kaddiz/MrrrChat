import { SOME_ACTION } from '../actions/ComponentActions';

const initialState = { value: 0 };

export default function (state = initialState, action) {
  switch (action.type) {
    case SOME_ACTION:
      return { value: state.value + 1 };
    default:
      return state;
  }
}

import { SET_CURRENT_MODULE } from '../actions';

export default function(state = {}, action) {
  switch (action.type) {
    case SET_CURRENT_MODULE:
      return action.payload[0];
    default:
      return state;
  }
}

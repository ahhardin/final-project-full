import { FETCH_MODULES } from '../actions';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_MODULES:
      return action.payload;
    default:
      return state;
  }
}

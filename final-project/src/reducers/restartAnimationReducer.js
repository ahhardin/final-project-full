import { RESTART_ANIMATION } from '../actions';

export default function(state = true, action) {
  switch (action.type) {
    case RESTART_ANIMATION:
      return action.payload;
    default:
      return state;
  }
}

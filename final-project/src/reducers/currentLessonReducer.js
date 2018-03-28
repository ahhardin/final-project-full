import { SET_CURRENT_LESSON } from '../actions';

export default function(state = {}, action) {
  switch (action.type) {
    case SET_CURRENT_LESSON:
      if (action.payload.module[0].lessons && action.payload.lID) {
        return action.payload.module[0].lessons.find(lesson => {
          return lesson.lID === action.payload.lID
        })
      } else {
        return state
      }
  default:
    return state;
}
}

import { combineReducers } from 'redux';
import currentUserReducer from "./currentUserReducer";
import allModules from './allModules';
import userModules from './userModules';
import currentModule from './currentModuleReducer'
import currentLesson from './currentLessonReducer'
import restartAnimation from './restartAnimationReducer'

const rootReducer = combineReducers({
  currentUser: currentUserReducer,
  modules: allModules,
  userModules: userModules,
  currentModule: currentModule,
  currentLesson: currentLesson,
  restart: restartAnimation
});

export default rootReducer

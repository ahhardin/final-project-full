import axios from "axios";

const ROOT_URL = "http://localhost:8000";

export const FETCH_MODULES = "FETCH_MODULES";
export const GET_CURRENT_USER = "GET_CURRENT_USER"
export const UPDATE_COMPLETION = "UPDATE_COMPLETION"
export const SET_GRADE = "SET_GRADE"
export const FETCH_USER_MODULES = "FETCH_USER_MODULES"
export const FETCH_USERS = "FETCH_USERS"
export const SET_CURRENT_MODULE = "SET_CURRENT_MODULE"
export const SET_CURRENT_LESSON= "SET_CURRENT_LESSON"
export const RESTART_ANIMATION = "RESTART_ANIMATION"


export const fetchModules = () => async dispatch => {
  const url = `${ROOT_URL}/modules`
  const modules = await axios.get(url, {headers: { "Content-Type" : "application/json"}})
  dispatch({
    type: FETCH_MODULES,
    payload: modules.data
  });
}

export const getCurrentUser = () => async dispatch => {
  const url = `${ROOT_URL}/current_user`
  const current_user = await axios.get(url, {headers: { "Content-Type" : "application/json"}})
  dispatch({
    type: GET_CURRENT_USER,
    payload: current_user.data
  })
}

export const fetchUsers = () => async dispatch => {
  const url = `${ROOT_URL}/users`
  const users = await axios.get(url, {headers: { "Content-Type" : "application/json"}})
  dispatch({
    type: FETCH_USERS,
    payload: users.data
  })
}

export const updateCompletion = (uID,mID,lID,percentComplete) => async dispatch => {
  const url = `${ROOT_URL}/user/${uID}/module/${mID}/lesson/${lID}?percentComplete=${percentComplete}`
  const user = await axios.post(url, {headers: { "Content-Type" : "application/json"}})
  dispatch({
    type: UPDATE_COMPLETION,
    payload: user.data
  })
}

export const setGrade = (uID,mID,lID,grade) => async dispatch => {
  const url = `${ROOT_URL}/user/${uID}/module/${mID}/lesson/${lID}?grade=${grade}`
  const user = await axios.post(url, {headers: { "Content-Type" : "application/json"}}, grade)
  dispatch({
    type: UPDATE_COMPLETION,
    payload: user.data
  })
}

export const setCurrentModule = (mID) => async dispatch => {
  const url = `${ROOT_URL}/modules/${mID}`
  const module = await axios.get(url, {headers: { "Content-Type" : "application/json"}})
  dispatch({
    type: SET_CURRENT_MODULE,
    payload: module.data
  });
}

export const setCurrentLesson = (mID, lID) => async dispatch => {
  const url = `${ROOT_URL}/modules/${mID}`
  const module = await axios.get(url, {headers: { "Content-Type" : "application/json"}})
  dispatch({
    type: SET_CURRENT_LESSON,
    payload: {module:module.data,lID:lID}
  });
}

export const restartAnimation = (restart) => {
  return({
    type: RESTART_ANIMATION,
    payload: !restart
  })
}

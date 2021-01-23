import { combineReducers } from 'redux';
import { user } from '../types/user';
const INITIAL_STATE = {
  userData: [],
};

const userReducer = (state = INITIAL_STATE, action) => {
  const { userData } = state;
  switch (action.type) {
    case user.USER_DATA:
      return state;
    case user.ADD_USER_DATA:
      userData.push(action.payload);
      const newState = { userData };
      return newState;
    case user.REMOVE_USER_DATA:
      userData.pop();
      return state;
    default:
      return state;
  }
};

export default combineReducers({
  user: userReducer,
});

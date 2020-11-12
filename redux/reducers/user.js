import { combineReducers } from 'redux';
import { user } from '../types/user';
const INITIAL_STATE = {
 userData: [{
   "email": "dalnbdklano"
 }]
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case user.USER_DATA:
      const { userData } = state;
      return {
        ...userData
      }

    default:
      return state
  }
};

export default combineReducers({
  user: userReducer
});
import { user } from '../types/user';

export const requestUserData = () => ({
  type: user.USER_DATA
});

export const addUserData = (data) => ({
  type: user.ADD_USER_DATA,
  payload: data
});

export const removeUserData = () => ({
  type: user.REMOVE_USER_DATA,
});
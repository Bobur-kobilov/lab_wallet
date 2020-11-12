import { put, everyTake } from 'redux-saga/effects';
import { requestUserData } from '../actions/user';
import { user } from '../actions/user';

export function* requestUserData() {
  try {
    const data = {
      "email": 'fsdknfkls'
    }
    yield put(requestUserData(data))
  } catch (e) {
    console.error(e);
    return e;
  };
};
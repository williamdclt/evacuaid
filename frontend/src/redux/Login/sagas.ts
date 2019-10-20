import { call, put, takeEvery, select } from 'redux-saga/effects';
import client from 'services/networking/client';
import { logoutUser, getUserInfo } from './actions';
import { getUserToken } from './selectors';
import { push } from 'connected-react-router';

export function* logoutUserSaga() {
  yield call([client, client.logout]);
  yield put(push('/'));
}

export function* getUserInfoSaga() {
  const endpoint = `/items`;
  const token = yield select(getUserToken);
  // @ts-ignore
  const response = yield call([client, client.get], endpoint, token);
  if (response.length === 0) {
    yield call([client, client.post], endpoint, token, {
      objectType: 'user',
    });
    yield put(push('/user-info/1'));
  } else {
    yield put(push('/'));
  }
}

export default function* loginSagas() {
  yield takeEvery(logoutUser.type, logoutUserSaga);
  yield takeEvery(getUserInfo.request, getUserInfoSaga);
}

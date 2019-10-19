import * as Sentry from '@sentry/browser';
import { call, put, takeEvery } from 'redux-saga/effects';
import client from 'services/networking/client';
import { ActionType, getType } from 'typesafe-actions';
import { loginUser, logoutUser } from './actions';
import { push } from 'connected-react-router';

export function* logoutUserSaga() {
  yield call([client, client.logout]);
  yield put(push('/'));
}

export default function* loginSagas() {
  yield takeEvery(logoutUser.type, logoutUserSaga);
}

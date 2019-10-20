import { call, put, takeEvery } from 'redux-saga/effects';
import client from 'services/networking/client';
import { fetchEvents } from './actions';
import { push } from 'connected-react-router';

export function* logoutUserSaga() {
  yield call([client, client.logout]);
  yield put(push('/'));
}

export function* fetchEventsSaga() {
  // @ts-ignore
  const response = yield call(
    [client, client.get],
    'https://nj34ptbfm3.execute-api.eu-west-2.amazonaws.com/dev/getFires',
    '',
  );
  response.sort(
    (a: { acq_time: string }, b: { acq_time: string }) =>
      parseInt(b.acq_time.replace(':', '')) - parseInt(a.acq_time.replace(':', '')),
  );
  yield put(fetchEvents.success({ events: response }));
}

export default function* loginSagas() {
  yield takeEvery(fetchEvents.request, fetchEventsSaga);
}

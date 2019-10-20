import { createAsyncAction } from 'typesafe-actions';

export const fetchEvents = createAsyncAction(
  'Login/USER_LOGIN_REQUEST',
  'Login/USER_LOGIN_SUCCESS',
  'Login/USER_LOGIN_FAILURE',
)<
  undefined,
  {
    events: Array<Object>;
  },
  {
    errorMessage: string;
  }
>();

export default {
  fetchEvents,
};

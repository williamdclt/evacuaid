import { AvatarAction, AvatarState } from './Avatar';
import { LoginAction, LoginState } from './Login';
import { EventsAction, EventsState } from './Events';
import { FormStateMap } from 'redux-form';

export type RootState = Readonly<{
  avatar: AvatarState;
  login: LoginState;
  events: EventsState;
  form: FormStateMap;
}>;
export type RootAction = AvatarAction | LoginAction;

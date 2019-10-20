import { AvatarAction, AvatarState } from './Avatar';
import { LoginAction, LoginState } from './Login';
import { FormStateMap } from 'redux-form';

export type RootState = Readonly<{
  avatar: AvatarState;
  login: LoginState;
  form: FormStateMap;
}>;
export type RootAction = AvatarAction | LoginAction;

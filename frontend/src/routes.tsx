import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router';
import Loader from './components/Loader/Loader';

const Home = lazy(() => import('./pages/Home'));
const Avatar = lazy(() => import('./pages/Avatar'));
const Callback = lazy(() => import('./pages/Callback'));
const PostSignUp1 = lazy(() => import('./pages/PostSignUp/Step1'));

export const PATHS = {
  HOME: '/',
  AVATAR: '/avatar',
  CALLBACK: '/callback',
  POST_SIGNUP: '/user-info',
};

const routes = () => (
  <Suspense fallback={<Loader />}>
    <Switch>
      <Route exact path={PATHS.HOME} component={Home} />
      <Route path={PATHS.AVATAR} component={Avatar} />
      <Route path={PATHS.CALLBACK} component={Callback} />
      <Route path={PATHS.POST_SIGNUP + '/1'} component={PostSignUp1} />
    </Switch>
  </Suspense>
);

export default routes;

import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router';
import Loader from './components/Loader/Loader';

const Home = lazy(() => import('./pages/Home'));
const Avatar = lazy(() => import('./pages/Avatar'));
const Callback = lazy(() => import('./pages/Callback'));

export const PATHS = {
  HOME: '/',
  AVATAR: '/avatar',
  CALLBACK: '/callback',
};

const routes = () => (
  <Suspense fallback={<Loader />}>
    <Switch>
      <Route exact path={PATHS.HOME} component={Home} />
      <Route path={PATHS.AVATAR} component={Avatar} />
      <Route path={PATHS.CALLBACK} component={Callback} />
    </Switch>
  </Suspense>
);

export default routes;

import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router';
import Loader from './components/Loader/Loader';

const Home = lazy(() => import('./pages/Home'));
const Avatar = lazy(() => import('./pages/Avatar'));
const Callback = lazy(() => import('./pages/Callback'));
const PostSignUp1 = lazy(() => import('./pages/PostSignUp/Step1'));
const PostSignUp2 = lazy(() => import('./pages/PostSignUp/Step2'));
const PostSignUp3 = lazy(() => import('./pages/PostSignUp/Step3'));
const PostSignUp3bis = lazy(() => import('./pages/PostSignUp/Step3bis'));

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
      <Route exact path={PATHS.AVATAR} component={Avatar} />
      <Route exact path={PATHS.CALLBACK} component={Callback} />
      <Route exact path={PATHS.POST_SIGNUP + '/1'} component={PostSignUp1} />
      <Route exact path={PATHS.POST_SIGNUP + '/2'} component={PostSignUp2} />
      <Route exact path={PATHS.POST_SIGNUP + '/3'} component={PostSignUp3} />
      <Route exact path={PATHS.POST_SIGNUP + '/3/bis'} component={PostSignUp3bis} />
    </Switch>
  </Suspense>
);

export default routes;

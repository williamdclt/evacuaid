import * as React from 'react';

import logo from 'assets/logo.png';
import './Home.style.scss';
import Button from 'components/Button';
import Link from 'components/Link';

const Home: React.FunctionComponent = props => {
  return (
    <div className="home">
      <img className="logo" alt="logo" src={logo} />
      <h2 className="page-title">Welcome to EvacuAID</h2>
      <Link
        href={`https://${
          process.env.REACT_APP_COGNITO_USER_POOL_DOMAIN
          }.auth.eu-west-2.amazoncognito.com/login?response_type=token&client_id=${
          process.env.REACT_APP_COGNITO_APP_CLIENT_ID
          }&redirect_uri=${window.location.origin}/callback`}
      >
        <Button>Sign up</Button>
      </Link>
    </div>
  );
};

export default Home;

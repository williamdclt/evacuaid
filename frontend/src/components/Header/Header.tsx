import React from 'react';
import { Link as RouterLink, RouteComponentProps, withRouter } from 'react-router-dom';
import logo from 'assets/logo.png';
import { FormattedMessage } from 'react-intl';
import { PATHS } from 'routes';
import Link from 'components/Link';
import './Header.style.scss';

interface IHeaderProps {
  isUserLoggedIn: boolean;
  logout: () => void;
}

const Header: React.FunctionComponent<RouteComponentProps & IHeaderProps> = ({
  isUserLoggedIn,
  logout,
}) => (
  <div className="header">
    <RouterLink to={PATHS.DASHBOARD}>
      <img className="logo" alt="Forge logo" src={logo} />
    </RouterLink>
     
    {isUserLoggedIn ? (
      <Link onClick={logout}>
        <FormattedMessage id="header.logout" />
      </Link>
    ) : (
      <Link
        href={`https://${
          process.env.REACT_APP_COGNITO_USER_POOL_DOMAIN
        }.auth.eu-west-2.amazoncognito.com/login?response_type=token&client_id=${
          process.env.REACT_APP_COGNITO_APP_CLIENT_ID
        }&redirect_uri=${window.location.origin}/callback`}
      >
        <FormattedMessage id="header.login" />
      </Link>
    )}
  </div>
);

export default withRouter(Header);

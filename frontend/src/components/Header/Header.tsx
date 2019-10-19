import React from 'react';
import { Link as RouterLink, RouteComponentProps, withRouter } from 'react-router-dom';
import logo from 'assets/logo.png';
import { PATHS } from 'routes';
import { Logo, HeaderContainer } from './Header.style';
import './Header.style.scss';

interface IHeaderProps {}

const Header: React.FunctionComponent<RouteComponentProps & IHeaderProps> = () => (
  <div className="header">
    <RouterLink to={PATHS.HOME}>
      <img className="logo" alt="Forge logo" src={logo} />
    </RouterLink>
  </div>
);

export default withRouter(Header);

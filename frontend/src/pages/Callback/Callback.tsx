import * as React from 'react';

interface Props {
  loginUser: (token: string) => void;
  push: (pathName: string) => void;
  getUserInfo: () => void;
}

class Callback extends React.PureComponent<Props> {
  componentDidMount = () => {
    const url = window.location.href;
    const locStart = url.search('id_token') + 9;
    const locEnd = url.search('&access_token');
    const jwt = url.substr(locStart, locEnd - locStart);
    this.props.loginUser(jwt);
    this.props.getUserInfo();
  };
  render = () => <div />;
}

export default Callback;

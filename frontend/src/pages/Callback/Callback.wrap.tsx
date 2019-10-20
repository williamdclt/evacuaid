import { push } from 'connected-react-router';
import { connect } from 'react-redux';

import { Dispatch } from 'redux';
import { actions } from 'redux/Login';
import Callback from './Callback';

const mapDispatchToProps = (dispatch: Dispatch) => ({
  loginUser: (token: string) => dispatch(actions.loginUser.success({ token })),
  push: (pathName: string) => dispatch(push(pathName)),
  getUserInfo: () => dispatch(actions.getUserInfo.request()),
});

export default connect(
  null,
  mapDispatchToProps,
)(Callback);

import { connect } from 'react-redux';

import { getUserToken } from 'redux/Login';
import { RootState } from 'redux/types';
import { push } from 'connected-react-router';
import { Dispatch } from 'redux';

import Home from './Home';

const mapStateToProps = (state: RootState) => ({
  isUserLoggedIn: !!getUserToken(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  push: (pathName: string) => dispatch(push(pathName)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);

import { connect } from 'react-redux';

import { Dispatch } from 'redux';
import { getUserToken } from 'redux/Login';
import { logoutUser } from 'redux/Login/actions';
import { RootState } from 'redux/types';
import Header from './Header';

const mapStateToProps = (state: RootState) => ({
  isUserLoggedIn: !!getUserToken(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  logout: () => {
    dispatch(logoutUser);
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);

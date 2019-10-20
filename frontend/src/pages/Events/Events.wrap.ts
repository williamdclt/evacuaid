import { connect } from 'react-redux';

import { Dispatch } from 'redux';
import { RootState } from 'redux/types';
import { actions } from 'redux/Events';
import Events from './Events';

const mapStateToProps = (state: RootState) => ({
  events: state.events.events,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchEvents: () => dispatch(actions.fetchEvents.request()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  // @ts-ignore
)(Events);

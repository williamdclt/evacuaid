import { ActionType, getType } from 'typesafe-actions';

import { AnyAction } from 'redux';
import { fetchEvents } from './actions';

export type EventsAction = ActionType<typeof fetchEvents.success>;

export type EventsState = Readonly<{
  events: Array<Object>;
}>;

const initialState: EventsState = {
  events: [],
};

const reducer = (state: EventsState = initialState, action: AnyAction) => {
  const typedAction = action as EventsAction;
  switch (typedAction.type) {
    case getType(fetchEvents.success):
      return {
        ...state,
        events: typedAction.payload.events,
      };
    default:
      return state;
  }
};

export default reducer;

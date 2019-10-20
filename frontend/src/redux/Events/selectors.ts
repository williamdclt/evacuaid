import { RootState } from 'redux/types';

export const getEvents = (store: RootState) => store.events.events;

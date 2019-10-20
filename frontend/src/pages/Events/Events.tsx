import * as React from 'react';
import { HTMLTable } from '@blueprintjs/core';
import Button from 'components/Button';
import '../Home/Home.style.scss';

import styled from 'styled-components';

interface Props {
  fetchEvents: () => void;
  events: Array<{
    latitude: string;
    longitude: string;
    acq_date: string;
    acq_time: string;
    confidence: string;
    bright_ti4: string;
  }>;
}

const Container = styled.div`
  width: 80%;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface IState {
  filter: boolean;
}

class Events extends React.PureComponent<Props, IState> {
  state: { filter: boolean } = {
    filter: false,
  };
  componentDidMount = () => {
    this.props.fetchEvents();
  };
  getEvents = () => {
    let events = this.props.events || [];
    if (this.state.filter) {
      events = this.props.events.filter(event => event.confidence === 'high');
    }
    return events.map((event, index) => (
      <tr key={index}>
        <td>{event.acq_date}</td>
        <td>{event.acq_time}</td>
        <td>Fire</td>
        <td>{event.latitude}</td>
        <td>{event.longitude}</td>
        <td>{event.confidence}</td>
        <td>{event.bright_ti4}</td>
      </tr>
    ));
  };
  render = () => (
    // @ts-ignore
    <>
      <h2 className="page-title">Events</h2>
      <Button
        // @ts-ignore
        onClick={() =>
          this.setState(state => ({
            filter: !state.filter,
          }))
        }
      >
        Filter by High Risk
      </Button>
      <Container>
        <HTMLTable className="bp3-html-table" striped style={{ width: 1500 }}>
          <thead>
            <tr>
              <th>Date</th>
              <th>Time</th>
              <th>Type</th>
              <th>Latitude</th>
              <th>Longitude</th>
              <th>Confidence</th>
              <th>Brightness</th>
            </tr>
          </thead>
          <tbody>{this.getEvents()}</tbody>
        </HTMLTable>
      </Container>
    </>
  );
}

export default Events;

import * as React from 'react';
import GoogleMapReact from 'google-map-react';

export interface Props {
  lat: number;
  lng: number;
}

class Map extends React.PureComponent<Props> {
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyBqO84g7HUzm3KO9KePCuUOtGK9EcjVjFA" }}
          defaultCenter={{ lat: this.props.lat, lng: this.props.lng }}
          defaultZoom={12}
        >
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;
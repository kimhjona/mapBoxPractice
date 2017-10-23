import React from 'react';
// import PropTypes from 'prop-types';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1Ijoiam9uYW1hbjExIiwiYSI6ImNqOTN3dXZ6eDB6bWYzMm13MXA1a3RwOHoifQ.lAzDj4-oGBp40MWSqpFkCg';

class MapBox extends React.Component {
  static propTypes = {
  };

  componentDidMount() {
    this.map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/light-v9'
    });
  }

  render() {
    let map;
    // const {
    // } = this.props;
    // const style = {
    // };
    return (
      <div ref={el => this.mapContainer = el}>
        {map}
      </div>
    );
  }
}
export default MapBox;

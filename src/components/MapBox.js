import React from 'react';
import PropTypes from 'prop-types';
import mapboxgl from 'mapbox-gl';
// import { connect } from 'react-redux'

mapboxgl.accessToken = 'pk.eyJ1Ijoiam9uYW1hbjExIiwiYSI6ImNqOTN3dXZ6eDB6bWYzMm13MXA1a3RwOHoifQ.lAzDj4-oGBp40MWSqpFkCg';

class MapBox extends React.Component {
  
  static propTypes = {
    updateLocation: PropTypes.func.isRequired,
    lng: PropTypes.number.isRequired,
    lat: PropTypes.number.isRequired,
    zoom: PropTypes.number.isRequired,
  };

  componentDidMount() {
    const {
      lng,
      lat,
      zoom,
    } = this.props;

    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/light-v9',
      // center: [lng, lat],
      // zoom,
    });

    const canvas = map.getCanvas();
    canvas.setAttribute('id', 'mapCanvas');
    map.resize();
    
    map.on('move', () => {
      if (typeof lng === 'number') this.updateLocation(lng, lat, zoom);
    });
  }

  updateLocation = (lng, lat, zoom) => {
    console.log('update location called with: ', lng, lat, zoom);
    this.props.updateLocation(lng, lat, zoom);
  }
  render() {
    return (
      <div
        ref={el => this.mapContainer = el}
        className="mapStyle absolute top right left bottom"

        /* onDrag={this.updateLocation} */
      />
    );
  }
}
export default MapBox;

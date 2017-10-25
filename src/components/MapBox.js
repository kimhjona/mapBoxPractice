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
    time: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  };

  componentDidMount() {
    const {
      lng,
      lat,
      zoom,
    } = this.props;

    const MAP_BOUNDS = [
      [-123.013916, 37.524669], // Southwest coordinates
      [-121.694183, 37.996941], // Northeast coordinates
    ];

    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/light-v9',
      center: [lng, lat],
      zoom,
      maxBounds: MAP_BOUNDS,
    });

    // const canvas = map.getCanvas();
    // canvas.setAttribute('id', 'mapCanvas');
    // map.resize();
    
    map.on('move', () => {
      // if (typeof lng === 'number') this.updateLocation(lng, lat, zoom);
    });

    map.on('load', () => {
      map.addControl(new mapboxgl.NavigationControl({ position: 'top-right' }));
      map.addLayer({
        id: "terrain-data",
        type: "line",
        source: {
          type: 'vector',
          url: 'mapbox://mapbox.mapbox-terrain-v2'
        },
        'source-layer': "contour",
        layout: {
          "line-join": "round",
          "line-cap": "round"
        },
        paint: {
          "line-color": "#ff69b4",
          'line-width': 1
        },
        'icon-size': 0.5,
      });
      map.addLayer({
        id: 'population',
        type: 'circle',
        source: {
          type: 'vector',
          url: 'mapbox://examples.8fgz4egr',
        },
        'source-layer': 'sf2010',
        paint: {
          // make circles larger as the user zooms from z12 to z22
          'circle-radius': {
            base: 1.01,
            stops: [[12, 1], [22, 10]]
          },
          // color circles by ethnicity, using data-driven styles
          'circle-color': {
            property: 'ethnicity',
            type: 'categorical',
            stops: [
              ['White', '#fbb03b'],
              ['Black', '#223b53'],
              ['Hispanic', '#e55e5e'],
              ['Asian', '#3bb2d0'],
              ['Other', '#ccc']]
          },
        },
      });
    });
  }

  updateLocation = (lng, lat, zoom) => {
    // console.log('update location called with: ', lng, lat, zoom);
    this.props.updateLocation(lng, lat, zoom);
  }
  render() {
    const {
      time,
      date,
    } = this.props;

    return (
      <div>
        <div className="inline-block absolute top left mt12 ml12 bg-darken75 color-white z1 py6 px12 round-full txt-s txt-bold">
          <div>Date: {date} Time: {time}</div>
        </div>
        <div
          ref={el => this.mapContainer = el}
          className="mapStyle absolute top right left bottom"
        />
      </div>
    );
  }
}
export default MapBox;

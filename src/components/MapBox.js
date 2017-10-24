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

    // const MAP_BOUNDS = [
    //   [-119.9442369,32.7089729], // Southwest coordinates
    //   [-116.63282912,35.8275538]  // Northeast coordinates
    // ];

    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/light-v9',
      center: [lng, lat],
      zoom,
      // maxBounds: MAP_BOUNDS,
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
          "line-width": 1
        },
        'icon-size': 0.5,
    });
      // map.addLayer({
      //   id: 'population',
      //   type: 'circle',
      //   source: {
      //     type: 'vector',
      //     url: 'mapbox://examples.8fgz4egr',
      //   },
      //   'source-layer': 'sf2010',
      //   paint: {
      //     // make circles larger as the user zooms from z12 to z22
      //     // 'circle-radius': {
      //     //   base: 1.01,
      //     //   stops: [[12, 1], [22, 10]]
      //     // },
      //     // color circles by ethnicity, using data-driven styles
      //     // 'circle-color': {
      //     //   property: 'ethnicity',
      //     //   type: 'categorical',
      //     //   stops: [
      //     //     ['White', '#fbb03b'],
      //     //     ['Black', '#223b53'],
      //     //     ['Hispanic', '#e55e5e'],
      //     //     ['Asian', '#3bb2d0'],
      //     //     ['Other', '#ccc']]
      //     // },
      //   },
      // });

    });
  }

  updateLocation = (lng, lat, zoom) => {
    // console.log('update location called with: ', lng, lat, zoom);
    this.props.updateLocation(lng, lat, zoom);
  }
  render() {
    return (
      <div
        ref={el => this.mapContainer = el}
        className="mapStyle absolute top right left bottom"
      />
    );
  }
}
export default MapBox;

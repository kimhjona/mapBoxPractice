import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateLocation, updateDate } from './actions';
import UnderMap from './UnderMap';

import MapBox from '../../components/MapBox';

const mapStateToProps = state => {
  const {
    date,
    time,
    lng,
    lat,
    zoom,
  } = state.map;
  return {
    date,
    time,
    lng,
    lat,
    zoom,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateLocation: (lng, lat, zoom) => { dispatch(updateLocation(lng, lat, zoom)); },
    updateDate: date => { dispatch(updateDate(date)); },
  };
};

@connect(mapStateToProps, mapDispatchToProps)
export default class Map extends PureComponent {
  static propTypes = {
    updateLocation: PropTypes.func,
    updateDate: PropTypes.func,
    lng: PropTypes.number,
    lat: PropTypes.number,
    zoom: PropTypes.number,
    date: PropTypes.string,
  };

  updateLocation = (lng, lat, zoom) => {
    this.props.updateLocation(lng, lat, zoom);
  }

  updateDate = date => {
    this.props.updateDate(date);
  }

  render() {
    const {
      lng,
      lat,
      zoom,
      date,
    } = this.props;

    return (
      <div>
        <div className="headerContainer">
          <h1>1000 Trips, an Interactive Visualization</h1>
        </div>
        <div className="mapBoxContainer">
          <MapBox
            updateLocation={this.updateLocation}
            lng={lng}
            lat={lat}
            zoom={zoom}
          />
        </div>
        <UnderMap
          updateDate={this.updateDate}
          date={date}
        />
      </div>
    );
  }
}

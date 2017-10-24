import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateLocation } from './actions';

import MapBox from '../../components/MapBox';

// import InputText from '../../components/InputText';
// import Button from '../../components/Button';
// import BankSelect from './BankSelect/BankSelect';
// import Header from './Welcome/Header';

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
    updateLocation: (lng, lat, zoom) => { 
      dispatch(updateLocation(lng, lat, zoom));
    },
  };
};

@connect(mapStateToProps, mapDispatchToProps)
export default class Map extends PureComponent {
  static propTypes = {
    updateLocation: PropTypes.func,
    lng: PropTypes.number,
    lat: PropTypes.number,
    zoom: PropTypes.number,
  };

  updateLocation = (lng, lat, zoom) => {
    console.log('updateLocation', lng, lat, zoom);
    this.props.updateLocation(lng, lat, zoom);
  }

  render() {
    const {
      lng,
      lat,
      zoom,
    } = this.props;

    return (
      <div>
        hello
        <MapBox
          updateLocation={this.updateLocation}
          lng={lng}
          lat={lat}
          zoom={zoom}
        />
      </div>
    );
  }
}

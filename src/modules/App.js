import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Map from './map/Container';

const mapStateToProps = state => {
  const {
    map: {
      // loggedIn,
    },
  } = state;

  return {
    // loggedIn,
  };
};

@connect(mapStateToProps, {})
export default class App extends PureComponent {
  static propTypes = {
    // loggedIn: PropTypes.bool,
  }

  render() {
    const {
      // loggedIn,
    } = this.props;
    return (
      <div>
        <Map />
      </div>
    );
  }
}
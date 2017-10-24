import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Map from './map/Container';

const mapStateToProps = state => {
  // const {
  //   map: {

  //   }
  // } = state;

  return {
  };
};

@connect(mapStateToProps, {})
export default class App extends PureComponent {
  // static propTypes = {
  // }
  render() {
    // console.log('this.state:', this.state);
    // console.log('this.props:', this.props);
    const {

    } = this.props;
    return (
      <div>
        <Map 
        />
      </div>
    );
  }
}
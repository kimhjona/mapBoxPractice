import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateDate } from './actions';

const mapStateToProps = state => {
  const {
    // date,
  } = state.map;
  return {

  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateDate: date => { dispatch(updateDate(date)); },
  };
};

@connect(mapStateToProps, mapDispatchToProps)
export default class UnderMap extends PureComponent {
  static propTypes = {
    updateDate: PropTypes.func,
    date: PropTypes.string,
  };

  updateDate = date => { 
    console.log(date);
    // this.updateDate(date); 
  }

  render() {
    const {
      date,
    } = this.props;

    return (
      <div className="underMap">
        <input
          id="date"
          type="date"
          min="2016-07-02"
          max="2017-10-04"
          onClick={this.updateDate}
          value={date}
        />
        <input
          id="range" 
          type="range" 
        />
      </div>
    );
  }
}

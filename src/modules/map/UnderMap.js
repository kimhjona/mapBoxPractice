import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateDate, updateTime } from './actions';

const mapStateToProps = state => {
  const {
    date,
    timeInt,
  } = state.map;
  return {
    timeInt,
    date,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateDate: date => { dispatch(updateDate(date)); },
    updateTime: time => { dispatch(updateTime(time)); },
  };
};

@connect(mapStateToProps, mapDispatchToProps)
export default class UnderMap extends PureComponent {
  static propTypes = {
    updateDate: PropTypes.func,
    updateTime: PropTypes.func,
    date: PropTypes.string,
    timeInt: PropTypes.string,
  };

  updateTime = () => {
    const newTime = this.inputTime;
    // console.log('newTime:', newTime.value);
    // const day = 
    // newTime.value
    this.props.updateTime(newTime.value);
  }

  updateDate = () => {
    // console.log(date);
    const newDate = this.inputDate;
    // console.log('inputDate?', this.inputDate);
    // console.log('val', newDate.value);
    // console.log('getdate', newDate.getDate
    this.props.updateDate(newDate.value);
  }

  render() {
    const {
      date,
      timeInt,
    } = this.props;

    // console.log('time:', timeInt)

    // console.log('date:', date);

    return (
      <div className="underMap">
        <input
          id="date"
          type="date"
          min="2016-07-02"
          max="2017-10-04"
          onChange={this.updateDate}
          ref={el => this.inputDate = el}
          value={date}
        />
        <input
          id="range"
          type="range"
          onChange={this.updateTime}
          ref={el => this.inputTime = el}
          value={timeInt}
          min="0"
          max="864"
          step="0.01"
        />
      </div>
    );
  }
}

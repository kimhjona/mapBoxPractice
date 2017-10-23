import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { formChange, onSubmit, displayProvidersFunc, chooseBank } from '../../actions';

import MapBox from '../../components/MapBox';

// import InputText from '../../components/InputText';
// import Button from '../../components/Button';
// import BankSelect from './BankSelect/BankSelect';
// import Header from './Welcome/Header';

const mapStateToProps = state => {
  // const {
  //   bank,
  //   displayProviders,
  //   isMapFormShown,
  //   selection,
  // } = state.Map;
  // return {
  //   bank,
  //   displayProviders,
  //   isMapFormShown,
  //   selection,
  // };
}

const mapDispatchToProps = dispatch => {
  return {
    // formChange: (change) => { dispatch(formChange(change)); },
    // onSubmit: () => { dispatch(onSubmit()); },
    // displayProvidersFunc: () => { dispatch(displayProvidersFunc()); },
    // chooseBank: bank => { dispatch(chooseBank(bank)); }
  };
};

@connect(mapStateToProps, mapDispatchToProps)
export default class Map extends PureComponent {
  static propTypes = {
    // formChange: PropTypes.func,
    // onSubmit: PropTypes.func,
  };

  // onFormChange = field => {
  //   this.props.formChange(field);
  // }
  render() {
    // const {
    // } = this.props;

    return (
      <div>
        hi
        <MapBox />
      </div>
    );
  }
}

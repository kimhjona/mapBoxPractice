import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { changeMessage } from '../actions';

const mapStateToProps = (state, ownProps) => {
  return {
    message: state.message
  }
}

const mapDispatchToProps = dispatch => {
  return {
    changeMessage: message => { dispatch(changeMessage(message)) }
  }
}

@connect(mapStateToProps, mapDispatchToProps)
export default class Message extends PureComponent {

  onClick = async () => {
    console.log('onclick')
    await this.props.changeMessage('test')
  }

  render () {
    const {
      changeMessage,
      message,
    } = this.props;

    return <button onClick={this.onClick}> Test the action {message}!</button>;
  }
}
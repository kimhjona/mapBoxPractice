export const dateChange = date => dispatch => {
  dispatch({
    type: 'DATE_CHANGE',
    date,
  });
};

export const timeChange = time => dispatch => {
  dispatch({
    type: 'TIME_CHANGE',
    time,
  });
};

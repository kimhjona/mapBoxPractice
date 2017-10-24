export const updateLocation = (lng, lat, zoom) => dispatch => {
  dispatch({
    type: 'UPDATE_LOCATION',
    lng,
    lat,
    zoom,
  });
};

export const updateDate = date => dispatch => {
  dispatch({
    type: 'UPDATE_DATE',
    date,
  });
};

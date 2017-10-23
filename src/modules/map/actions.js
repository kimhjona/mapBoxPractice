export const updateLocation = (lng, lat, zoom) => dispatch => {
  dispatch({
    type: 'UPDATE_LOCATION',
    lng,
    lat,
    zoom,
  });
};

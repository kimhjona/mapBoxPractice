const initialState = {
  date: '2016-07-02',
  time: '13:09:31',
  lng: -122.447303,
  lat: 37.753574,
  zoom: 9,
};

// console.log('state:', initialState);

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_DATE': {
      const {
        date,
      } = action;

      return {
        ...state,
        date,
      };
    }

    case 'TIME_SUBMIT': {
      const {
        time,
      } = action;
      return {
        ...state,
        time,
      };
    }

    case 'UPDATE_LOCATION': {
      const {
        lng,
        lat,
        zoom,
      } = action;
      return {
        ...state,
        lng: lng.toFixed(4),
        lat: lat.toFixed(4),
        zoom: zoom.toFixed(2),
      };
    }

    default:
      return state;
  }
};

export default reducer;

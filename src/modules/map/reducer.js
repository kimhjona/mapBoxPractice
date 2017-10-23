const initialState = {
  date: '2016-07-02',
  time: '13:09:31',
  lng: 5,
  lat: 34,
  zoom: 1.5,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'DATE_CHANGE': {
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

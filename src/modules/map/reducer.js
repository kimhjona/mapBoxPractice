const initialState = {
  date: '2016-07-02',
  time: '09:00:00',
  timeInt: 324,
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

    case 'UPDATE_TIME': {
      const {
        timeInt,
      } = action;

      const secondsTotal = timeInt * 100;
      const hours = Math.floor(secondsTotal / 3600);
      const minutes = Math.floor((secondsTotal - (hours * 3600)) / 60);
      const seconds = Math.round(secondsTotal - (minutes * 60) - (hours * 3600));

      console.log(hours, minutes, seconds);

      const strConv = num => {
        const newResult =
          num.length === 2
            ?
            num.toString()
            :
            '0'.concat(num);
        return newResult;
      };

      const newTime =
        strConv(hours)
          .concat(':')
          .concat(strConv(minutes))
          .concat(':')
          .concat(strConv(seconds));
      
      console.log('newTime', newTime);

      return {
        ...state,
        timeInt,
        time: newTime,
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

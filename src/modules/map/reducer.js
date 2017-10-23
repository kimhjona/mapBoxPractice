const initialState = {
  date: '2016-07-02',
  time: '13:09:31',
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

    default:
      return state;
  }
};

export default reducer;

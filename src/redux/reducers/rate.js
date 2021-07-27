const initialState = {
  items: [],
  rates: [],
  loading: false,
};

export const rate = (state = initialState, action) => {
  switch (action.type) {
    case "rates/load/start":
      return {
        ...state,
        loading: true,
      };

    case "rates/load/success":
      return {
        ...state,
        loading: false,
        items: action.payload,
        rates: action.rates,
      };

    default:
      return state;
  }
};

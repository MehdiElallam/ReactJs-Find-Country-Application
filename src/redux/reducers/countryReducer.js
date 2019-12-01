const SEARCH = "SEARCH";
const initialState = {
  countries: []
};

const countryReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH:
      return {
        ...state,
        countries: action.countries
      };
    default:
      return state;
  }
};
export default countryReducer;

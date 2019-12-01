import {
  FETCH_COUNTRIES_REQUEST,
  FETCH_COUNTIES_SUCCESS,
  FETCH_COUNTRIES_FAILURE
} from "./countryTypes";

const fetchUsersRequest = () => {
  return {
    type: FETCH_COUNTRIES_REQUEST
  };
};

const fetchUsersSuccess = users => {
  return {
    type: FETCH_COUNTIES_SUCCESS,
    payload: users
  };
};

const fetchUsersFailure = error => {
  return {
    type: fetchUsersFailure,
    payload: error
  };
};

export default { fetchUsersRequest, fetchUsersSuccess, fetchUsersFailure };

import { createStore } from "redux";
import countryReducer from "./reducers/countryReducer";

const store = createStore(countryReducer);

export default store;

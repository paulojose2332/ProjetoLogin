import { combineReducers } from "redux";

import login from "./login";

const reducers = { login };

const rootReducer = combineReducers(reducers);

export default rootReducer;

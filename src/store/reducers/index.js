import { combineReducers } from "redux";

import login from "./login";
import register from "./register";

const reducers = { login , register};

const rootReducer = combineReducers(reducers);

export default rootReducer;

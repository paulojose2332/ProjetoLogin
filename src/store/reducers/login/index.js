import * as actions from "../../actions/login";
import moment from "moment";

const initialState = {
  user: null,
  loading: false,
  username: "",
  password: "",
  token: "",
  expiration: "",
  error: ""
};

const reducer = function(state = initialState, { type, payload }) {
  switch (type) {
    case actions.SET_VALUE:
      return {
        ...state,
        ...payload
      };
    case actions.CLEAR_VALUES:
      return {
        ...initialState
      };
    case actions.LOGIN:
      return {
        ...state,
        loading: true,
        error: ""
      };
    case actions.LOGIN_SUCCESS:
      return {
        ...state,
        token: payload.token,
        expiration: moment(payload.expiration),
        password: "",
        loading: false
      };
    case actions.LOGIN_ERROR:
      return {
        ...state,
        loading: false,
        passowrd: "",
        error: payload
      };

    case actions.GET_USER_DATA:
      return {
        ...state,
        loading: true,
        error: ""
      };
    case actions.SET_USER_DATA:
      return {
        ...state,
        loading: false,
        user: payload,
        error: ""
      };
    case actions.USER_LOGGED_OUT:
      return {
        ...state,
        ...initialState
      };

    default:
      return state;
  }
};

export default reducer;

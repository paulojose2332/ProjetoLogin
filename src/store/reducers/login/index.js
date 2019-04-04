import * as actions from "../../actions/login";

const initialState = {
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
        expiration: payload.expiration,
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

    default:
      return state;
  }
};

export default reducer;

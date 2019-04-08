import * as actions from "../../actions/register";
import moment from "moment";

const initialState = {
  name: "",
  lastName: "",
  gender: "",
  birthdate: "",
  state: "",
  city: "",
  email: "",
  password: "",
  confirmPassword: "",
  loading: false,
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
    case actions.REGISTER:
      return {
        ...state,
        loading: true,
        error: ""
      };
    case actions.REGISTER_SUCCESS:
      return {
        ...initialState,
        loading: false
      };


    default:
      return state;
  }
};

export default reducer;

import * as api from "../../../services/api";
import { getErrors } from "../../../helpers/error";
import * as loginActions from "../login";
import moment from "moment";

export const REGISTER = "[REGISTER] REGISTER";
export const REGISTER_SUCCESS = "[REGISTER] REGISTER_SUCCESS";
export const REGISTER_ERROR = "[REGISTER] REGISTER_ERROR";

export const SET_VALUE = "[REGISTER] SET_VALUE";
export const CLEAR_VALUES = "[REGISTER] CLEAR_VALUES";

export function setValue(payload) {
  return { type: SET_VALUE, payload };
}

export function clearValues() {
  return { type: CLEAR_VALUES };
}

export function submitRegister(callback) {
  return async (dispatch, getState) => {
    dispatch({
      type: REGISTER
    });

    const {
      name,
      lastName,
      gender,
      birthdate,
      state,
      city,
      email,
      password,
      confirmPassword
    } = getState().register;
    console.log(birthdate);
    try {
      let response = await api.sendPost("/account/register", {
        name,
        lastName,
        gender,
        birthdate: moment(birthdate).format(),
        city,
        state,
        email,
        password,
        confirmPassword
      });

      let result = await response.json();

      if (result.isValid) {
        dispatch({
          type: REGISTER_SUCCESS,
          payload: result.model
        });

        dispatch(loginActions.setValue({ username: email, password }));
        dispatch(loginActions.submitLogin(callback));
      } else {
        dispatch({
          type: REGISTER_ERROR,
          payload: getErrors(result.errors)
        });
      }
    } catch (error) {
      dispatch({
        type: REGISTER_ERROR,
        payload: { error: "Connection error" }
      });
    }
  };
}

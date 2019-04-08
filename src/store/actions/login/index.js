import * as api from "../../../services/api";

import { getErrors } from "../../../helpers/error";

export const LOGIN = "[LOGIN]LOGIN";
export const LOGIN_SUCCESS = "[LOGIN]LOGIN_SUCCESS";
export const LOGIN_ERROR = "[LOGIN]LOGIN_ERROR";

export const SET_VALUE = "[LOGIN] SET_VALUE";
export const CLEAR_VALUES = "[LOGIN] CLEAR_VALUES";

export const GET_USER_DATA = "[USER] GET_USER_DATA";
export const SET_USER_DATA = "[USER] SET_USER_DATA";
export const GET_USER_DATA_ERROR = "[USER] GET_USER_DATA_ERROR";

export const USER_LOGGED_OUT = "[USER] USER_LOGGED_OUT";

export function setValue(payload) {
  return { type: SET_VALUE, payload };
}

export function clearValues() {
  return { type: CLEAR_VALUES };
}
export function submitLogin(callback) {
  return async (dispatch, getState) => {
    dispatch({
      type: LOGIN
    });

    const { username, password } = getState().login;

    try {
      let response = await api.sendPost("/token", {
        username,
        password
      });

      let result = await response.json();

      if (result.isValid) {
        dispatch({
          type: LOGIN_SUCCESS,
          payload: result.model
        });

        dispatch(getUserData(callback));
      } else {
        dispatch({
          type: LOGIN_ERROR,
          payload: getErrors(result.errors)
        });
      }
    } catch (error) {
      return dispatch({
        type: LOGIN_ERROR,
        payload: { error: "Connection error" }
      });
    }
  };
}

export function getUserData(callback) {
  return async (dispatch, getState) => {
    dispatch({
      type: GET_USER_DATA
    });
    try {
      const { token } = getState().login;

      let response = await api.sendGet("/user/me", {
        Authorization: "Bearer " + token
      });

      let result = await response.json();

      if (result.isValid) {
        dispatch({
          type: SET_USER_DATA,
          payload: result.model
        });
        callback && callback();
      } else {
        dispatch({
          type: GET_USER_DATA_ERROR,
          payload: getErrors(result.errors)
        });
      }
    } catch (error) {
      return dispatch({
        type: GET_USER_DATA_ERROR,
        payload: {
          error: "Connection error"
        }
      });
    }
  };
}

export function logoutUser() {
  return {
    type: USER_LOGGED_OUT
  };
}

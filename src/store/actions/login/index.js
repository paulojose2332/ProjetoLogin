export const LOGIN = "[LOGIN]LOGIN";
export const LOGIN_SUCCESS = "[LOGIN]LOGIN_SUCCESS";
export const LOGIN_ERROR = "[LOGIN]LOGIN_ERROR";

export const SET_VALUE = "[LOGIN] SET_VALUE";
export const CLEAR_VALUES = "[LOGIN] CLEAR_VALUES";

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

    fetch("http://173.249.17.248:8078/Token", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({
        username,
        password
      })
    })
      .then(res => res.json())
      .then(json => {
        dispatch({
          type: LOGIN_SUCCESS,
          payload: json.model
        });
      })
      .catch(error =>{
        dispatch({
          type: LOGIN_ERROR,
          payload: error
        });
      });
  };
}

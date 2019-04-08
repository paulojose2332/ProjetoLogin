import moment from "moment";

var api = "";
if (process.env.REACT_APP_API) {
  api = process.env.REACT_APP_API;
} else if (process.env.NODE_ENV === "development") {
  api = "";
} else {
  api = window.location.protocol.indexOf("https") > "-1" ? "" : "";
}

export function createRequest(url, method, body, headers) {
  let options = {
    method,
    headers: {
      "content-type": "application/json",
      timezone: moment().format("Z"),
      ...headers
    }
  };

  if (body) options.body = JSON.stringify(body);

  url = api + url;

  return fetch(url, options);
}

export function sendPost(url, body, headers) {
  return createRequest(url, "POST", body, headers);
}

export function sendPut(url, body, headers) {
  return createRequest(url, "PUT", body, headers);
}

export function sendGet(url, headers) {
  return createRequest(url, "GET", null, headers);
}

export function sendDelete(url, headers) {
  return createRequest(url, "DELETE", null, headers);
}

export function sendPostFile(url, file, headers) {
  const formData = new FormData();

  formData.append("file", file);

  const options = {
    method: "POST",
    body: formData,
    // If you add this, upload won't work
    headers: {
      // 'Content-Type': 'multipart/form-data',
      ...headers
    }
  };

  url = api + url;

  return fetch(url, options);
}

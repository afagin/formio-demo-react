import { SET_TOKEN, SET_FORM_URL, TOKEN_CHECKED } from "./types";

export const setToken = token => ({
  type: SET_TOKEN,
  token
});

export const tokenChecked = () => ({
  type: TOKEN_CHECKED
});

export const setFormUrl = formUrl => ({
  type: SET_FORM_URL,
  formUrl
});

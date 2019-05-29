import { SET_TOKEN, SET_FORM_URL, TOKEN_CHECKED } from "./types";

const initState = {
  token: "",
  formUrl: "",
  tokenChecked: false
};

const appReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_TOKEN:
      localStorage.setItem("token", action.token);
      return {
        ...state,
        token: action.token
      };
    case SET_FORM_URL:
      return {
        ...state,
        formUrl: action.formUrl
      };
    case TOKEN_CHECKED:
      return {
        ...state,
        tokenChecked: true
      };
    default:
      return state;
  }
};

export default appReducer;

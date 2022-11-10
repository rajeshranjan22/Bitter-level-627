import {
  CREATE_FAILURE,
  CREATE_REQUEST,
  CREATE_SUCCESS,
  SIGNIN_FAILURE,
  SIGNIN_REQUEST,
  SIGNIN_SUCCESS,
  SIGNOUT,
} from "./actionTypes";

const signInData = {
  userData: {},
  token: "",
  isAuth: false,
  isLooding: false,
  isError: false,

  successfullyCreated: false,
  createAccountLooding: false,
  createAccountError: false,
  errorData: [],
};

export const AuthReducer = (state = signInData, action) => {
  const { type, payload } = action;
  switch (type) {
    case SIGNIN_REQUEST:
      return {
        ...state,
        isLooding: true,
      };
    case SIGNIN_SUCCESS:
      return {
        ...state,
        isLooding: false,
        isAuth: true,
        token: payload.token,
        userData: payload.data,
        isError: false,
      };
    case SIGNIN_FAILURE:
      return {
        ...state,
        isAuth: false,
        isLooding: false,
        isError: true,
        errorData: payload,
      };
    case CREATE_REQUEST:
      return {
        ...state,
        createAccountLooding: true,
      };
    case CREATE_SUCCESS:
      return {
        ...state,
        createAccountLooding: false,
        successfullyCreated: true,
        createAccountError: false,
        userData: payload,
      };
    case CREATE_FAILURE:
      return {
        ...state,
        createAccountLooding: false,
        successfullyCreated: false,
        createAccountError: true,
        isAuth: false,
        errorData: payload,
      };
    case SIGNOUT:
      return {
        ...state,
        userData: {},
        token: "",
        isAuth: false,
        isLooding: false,
        isError: false,

        successfullyCreated: false,
        createAccountLooding: false,
        createAccountError: false,
        errorData: [],
      };
    default:
      return state;
  }
};

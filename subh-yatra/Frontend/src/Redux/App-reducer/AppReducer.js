import * as types from "./actionTypes";

const Data = {
  data: [],
  singleProduct: {},
  isLoading: false,
  isError: false,
};

export const AppReducer = (state = Data, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_DATA_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case types.GET_DATA_SUCCESS:
      return {
        ...state,
        data: payload,
        isLoading: false,
        isError: false,
      };
    case types.GET_DATA_FALIURE:
      return {
        ...state,
        isError: true,
        isLoading: false,
      };
    case types.FILTER_DATA_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case types.FILTER_DATA_SUCCESS:
      return {
        ...state,
        data: payload,
        isLoading: false,
        isError: false,
      };
    case types.FILTER_DATA_FALIURE:
      return {
        ...state,
        isError: true,
        isLoading: false,
      };
    case types.GET_SINGLE_PRODUCT_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case types.GET_SINGLE_PRODUCT_SUCCESS:
      return {
        ...state,
        singleProduct: { ...payload },
        isLoading: false,
        isError: false,
      };
    case types.GET_SINGLE_PRODUCT_FALIURE:
      return {
        ...state,
        isError: true,
        isLoading: false,
      };
    default:
      return state;
  }
};

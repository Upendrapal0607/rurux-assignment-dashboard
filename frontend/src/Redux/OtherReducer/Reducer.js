import {
  ADMIN_LOGIN_FAIL,
  ADMIN_LOGIN_REQUEST,
  ADMIN_LOGIN_SUCCESS,
  STREAML_FAIL,
  STREAML_REQUEST,
  STREAML_SUCCESS,
  SUBJECT_FAIL,
  SUBJECT_REQUEST,
  SUBJECT_SUCCESS,
} from "./ActionType";

const initialState = {
  isLoading: false,
  isError: false,
  marksList: [],
  streamList: [],
  studentList: [],
  subjectList: [],
  isAuth: false,
  adminToken: "",
};

export const Reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADMIN_LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case ADMIN_LOGIN_SUCCESS:
      return {
        ...state,
        isAuth: true,
        adminToken: payload?.token,
        isLoading: false,
      };
    case ADMIN_LOGIN_FAIL:
      return {
        ...state,
        isAuth: false,
        isLoading: false,
        adminToken: "",
        isError: true,
      };
    case STREAML_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case STREAML_SUCCESS:
      return {
        ...state,
        streamList: payload,
        isLoading: false,
      };
    case STREAML_FAIL:
      return {
        ...state,
        streamList: [],
        isLoading: false,
        isError: true,
      };
    case SUBJECT_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case SUBJECT_SUCCESS:
      return {
        ...state,
        subjectList: payload,
        isLoading: false,
      };
    case SUBJECT_FAIL:
      return {
        ...state,
        subjectList: [],
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
};

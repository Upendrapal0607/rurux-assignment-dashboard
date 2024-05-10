import {
  GET_ALL_STUDENT_REQUEST,
  GET_ALL_STUDENT_REQUEST_SUCCESS,
  REGISTER_REQUEST,
  REGISTER_REQUEST_FAIL,
  REGISTER_REQUEST_SUCCESS,
} from "./ActionType";

const initialState = {
  isLoading: false,
  isError: false,
  studentList: [],
};

export const Reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_STUDENT_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case GET_ALL_STUDENT_REQUEST_SUCCESS:
      return {
        ...state,
        studentList: payload,
        isLoading: false,
        isError: false,
      };

    case REGISTER_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case REGISTER_REQUEST_SUCCESS:
      return {
        ...state,
        isError: false,
        isLoading: false,
        userDetails: payload,
      };
    case REGISTER_REQUEST_FAIL:
      return {
        ...state,
        isError: true,
        studentList: [],
        isLoading: false,
      };
    default:
      return state;
  }
};

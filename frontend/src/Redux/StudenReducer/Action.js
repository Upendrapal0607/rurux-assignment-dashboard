import axios from "axios";
import {
  GET_ALL_STUDENT_REQUEST,
  GET_ALL_STUDENT_REQUEST_SUCCESS,
  REGISTER_REQUEST_FAIL,
} from "./ActionType";
const url = "https://rurux-university-dashboard-backend.vercel.app/";
let token = JSON.parse(localStorage.getItem("AdminToken")) || "";
export const getAllStudentList = () => async (dispatch) => {
  try {
    dispatch({ type: GET_ALL_STUDENT_REQUEST });
    const res = await axios.get(`${url}student/`, {
      headers: { Authorization: token },
    });
    dispatch({
      type: GET_ALL_STUDENT_REQUEST_SUCCESS,
      payload: res?.data?.studentList,
    });
   
    return res.data?.studentList;
  } catch (error) {
    dispatch({ type: REGISTER_REQUEST_FAIL });
  }
};

export const AddNewStudent = (payload) => async (dispatch) => {
  try {
    const res = await axios.post(`${url}student/register/`, payload, {
      headers: { Authorization: token },
    });
  console.log({result:res});
    return res.data;
  } catch (error) {
    dispatch({ type: REGISTER_REQUEST_FAIL });
  }
};

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
import axios from "axios";
const url = "https://rurux-university-dashboard-backend.vercel.app/"
let token = JSON.parse(localStorage.getItem("AdminToken")) || "";

export const AdminLogin = (payload) => async (dispatch) => {

  try {
    dispatch({ type: ADMIN_LOGIN_REQUEST });
    return await axios
      .post(`${url}admin/login`, payload)
      .then((res) => {
        dispatch({ type: ADMIN_LOGIN_SUCCESS, payload: res.data });
        console.log();
     
        localStorage.setItem("AdminToken", JSON.stringify(res.data.token));
        return res;
      })
      .catch((error) => {
        dispatch({ type: ADMIN_LOGIN_FAIL });
      });
  } catch (error) {
    dispatch({ type: ADMIN_LOGIN_FAIL });
  }
};

export const GetAllStreams = () => async (dispatch) => {
  try {
    dispatch({ type: STREAML_REQUEST });
    const res = await axios.get(`${url}stream/`, {
      headers: { Authorization: token },
    });
    dispatch({ type: STREAML_SUCCESS, payload: res?.data?.StrimList });

    return res.data?.StrimList;
  } catch (error) {
    dispatch({ type: STREAML_FAIL });
  }
};
export const AddStream = (payload) => async (dispatch) => {
  try {
    const res = await axios.post(`${url}stream/addstream/`, payload, {
      headers: { Authorization: token },
    });
    return res.data;
  } catch (error) {
    dispatch({ type: STREAML_FAIL });
  }
};

export const DeleteStream = (id) => async (dispatch) => {
  try {
    const res = await axios.delete(`${url}stream/delete/${id}`, {
      headers: { Authorization: token },
    });
    
    return res.data;
  } catch (error) {
    dispatch({ type: STREAML_FAIL });
  }
};

export const GetAllSubject = () => async (dispatch) => {
  try {
    dispatch({ type: SUBJECT_REQUEST });
    const res = await axios.get(`${url}subject/`, {
      headers: { Authorization: token },
    });
    dispatch({ type: SUBJECT_SUCCESS, payload: res?.data?.subjectList });

    return res.data?.SubjectList;
  } catch (error) {
    dispatch({ type: SUBJECT_FAIL });
  }
};

export const AddSubject = (payload) => async (dispatch) => {
  try {
    const res = await axios.post(`${url}subject/`, payload, {
      headers: { Authorization: token },
    });

    return res.data;
  } catch (error) {
    dispatch({ type: SUBJECT_FAIL });
  }
};
export const DeleteSubject = (id) => async (dispatch) => {
  try {
    const res = await axios.delete(`${url}subject/delete/${id}`, {
      headers: { Authorization: token },
    });
   
    return res.data;
  } catch (error) {
    dispatch({ type: STREAML_FAIL });
  }
};

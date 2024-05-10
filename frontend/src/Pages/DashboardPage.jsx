import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetAllStreams } from "../Redux/OtherReducer/Action";
import { Stream } from "../Components/Stream";
import { Subject } from "../Components/Subject";
import { StudentSignUp } from "./StudentSignUp";
import StudentTable from "../Components/StudentTable";
import { getAllStudentList } from "../Redux/StudenReducer/Action";

export const DashboardPage = () => {
  const dispatch = useDispatch();
  const { streamList, subjectList, isLoading } = useSelector(
    (state) => state.OtherReducer
  );
  const data = useSelector((state) => state.studentReducer);
 
  const DashboardStreamData = async () => {
    await dispatch(GetAllStreams())
      .then((res) => {
        console.log({result: res});
      })
      .catch((err) => {
        console.log({ err });
      });
  };

  const getAllStudent = async () => {
    await dispatch(getAllStudentList())
      .then((res) => {
       console.log({res});
      })
      .catch((err) => {
        console.log({ err });
      });
  };

  useEffect(() => {
    getAllStudent();
  }, []);
  useEffect(() => {
    DashboardStreamData();
  }, []);
  return (
    <div className="min-h-[100vh] py-4">
      <h1 className="font-bold text-slate-800">
        WELCOME ADMIN MANAGE YOU DASHBOARD HERE!
      </h1>
      <Stream
        data={streamList}
        DashboardStreamData={DashboardStreamData}
        isLoading={isLoading}
      />
      <Subject stream={streamList} />
      <StudentSignUp stream={streamList} getAllStudent={getAllStudent} />
      <StudentTable studentList={data.studentList} />
    </div>
  );
};

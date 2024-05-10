import React, { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import {

  AddSubject,
  DeleteSubject,
  GetAllSubject,
} from "../Redux/OtherReducer/Action";
export const Subject = ({ stream = []}) => {
  const [streamValue, setStreamValue] = useState("");
  const [subjectValue, setSubjectValue] = useState("");
  const { streamList, subjectList } = useSelector(
    (state) => state.OtherReducer
  );
  const dispatch = useDispatch();

  const FetchSubjectData = async () => {
    await dispatch(GetAllSubject())
      .then((res) => {
       
      })
      .catch((err) => {
        console.log({ err });
      });
  };

  useEffect(() => {
    FetchSubjectData();
  }, []);

  const HandleDeleteDubject = (id) => {
    dispatch(DeleteSubject(id))
      .then((res) => {
        if (res.message == "subject has been deleted") {
          FetchSubjectData();
        }
        alert(res.message);
      })
      .catch((err) => console.log({ err }));
  };

  const AddNewSubjectFuction = () => {
    let addebleSubject = {
      stream: streamValue || stream[0]?.stream,
      subject: subjectValue,
    };

    if(!streamValue&&!subjectValue){
      alert("please enter valid subject and stream");
      return;
  }

    dispatch(AddSubject(addebleSubject))
      .then((res) => {
        if (res.message == "new subject added") {
          FetchSubjectData();
          setSubjectValue("");
        }
        alert(res.message);
      })
      .catch((err) => console.log({ err }));
  };

  return (
    <div className="my-2">
      <h1 className="font-semibold text-slate-800 box-border text-left p-2">
        All Subject{" "}
      </h1>
      <div className="flex flex-wrap gap-2 p-2 box-border">
        {subjectList?.map((subject) => (
          <div
            className="px-2 py-0 flex gap-0 items-center content-center"
            style={{ border: "1px solid black", borderRadius: "4px" }}
            key={stream._id}
          >
            <div>
              <p>subject: {subject.subject}</p>
              <p>stream : {subject?.stream}</p>
            </div>
            <IoMdClose
              className="cursor-pointer"
              onClick={() => HandleDeleteDubject(subject._id)}
            />
          </div>
        ))}
        <div className="flex gap-2 flex-wrap">
          <input
            value={subjectValue}
            onChange={(e) => setSubjectValue(e.target.value)}
            type="text"
            className="text-black  mt-1 p-2 block w-auto border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring"
            placeholder="Add subject here..."
          />
          <select
            name=""
            id=""
            onChange={(e) => setStreamValue(e.target.value)}
          >
            {streamList &&
              streamList?.map((streamItem) => (
                <option key={streamItem._id} value={streamItem.stream}>
                  {streamItem.stream}
                </option>
              ))}
          </select>

          <button
            className="bg-blue-500 w-[200px] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={AddNewSubjectFuction}
          >
            ADD SUBJECT
          </button>
        </div>
      </div>
    </div>
  );
};

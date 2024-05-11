import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { useDispatch } from "react-redux";
import {
  AddStream,
  DeleteStream,
  GetAllStreams,
} from "../Redux/OtherReducer/Action";
import { Button } from "@chakra-ui/react";
export const Stream = ({ data = [], DashboardStreamData, isLoading }) => {
  
  const [streamValue, setStreamValue] = useState("");
  const dispatch = useDispatch();
  const HandleDelete = (id) => {
    dispatch(DeleteStream(id))
      .then((res) => {
 
        if (res.message == "stream has been deleted") {
          DashboardStreamData();
        }
        alert(res.message);
      })
      .catch((err) => console.log({ err }));
  };
  const AddNeSream = () => {
    if(!streamValue){
        alert("please enter stream name");
        return;
    }

    
    dispatch(AddStream({ stream: streamValue }))
      .then((res) => {
     
        if (res.message == "new stream created") {
          DashboardStreamData();
          setStreamValue("");
        }
        alert(res.message);
      })
      .catch((err) => console.log({ err }));
    setStreamValue("");
  };

  return (
    <div className="my-2">
      <h1 className="font-semibold text-slate-800 box-border text-left p-2">
        All Stream{" "}
      </h1>
      <div className="flex flex-wrap gap-2 p-2 box-border">
        {data?.map((stream) => (
          <div
            className="px-2 py-0 flex gap-0 items-center content-center"
            style={{ border: "1px solid black", borderRadius: "4px" }}
            key={stream._id}
          >
            <p>{stream?.stream}</p>
            <IoMdClose
              className="cursor-pointer"
              onClick={() => HandleDelete(stream._id)}
            />
          </div>
        ))}
        <div className="flex gap-2">
          <input
            value={streamValue}
            onChange={(e) => setStreamValue(e.target.value)}
            type="text"
            className="text-black mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring"
            placeholder="Add Stream"
          />
          {isLoading ? (
            <Button
              isLoading
              w={"100%"}
              loadingText="Sign in..."
              colorScheme="teal"
              variant="outline"
            >
              Submit
            </Button>
          ) : (
            <button
              className="bg-blue-500 w-[200px] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={AddNeSream}
            >
              ADD STREAM
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

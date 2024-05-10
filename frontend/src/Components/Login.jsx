import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AdminLogin } from "../Redux/OtherReducer/Action";

export const Login = () => {
    const [username,setUserName] = useState("");
    const [password,setPassword] = useState("");
const dispatch = useDispatch();

    const handlAdminSubmit = e => {
        e.preventDefault();
  if(username =="admin"&& password=="admin"){
dispatch(AdminLogin({username,password}));
  }
  else{
    alert("Invalid Username or Password");
  }
    }
   
  return (
    <div className="flex justify-center items-center h-screen flex-col sm:flex-row">
      <div className="bg-gray-800 w-[100%] sm:w-auto text-white rounded-lg p-8 shadow-md">
        <h2 className="text-xl font-bold mb-4">Admin Login</h2>
        <form className="space-y-8 sm:space-y-4 w-auto" onSubmit={handlAdminSubmit}>
          <div>
            <label
              className="block text-sm font-medium "
            >
              Username
            </label>
            <input value={username} 
            onChange={e => setUserName(e.target.value)}
            type="text"
            className="text-black mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring"
              placeholder="Enter admin here..."
            />
          </div>
          <div>
            <label
              htmlFor="adminPassword"
              className="block text-sm font-medium "
       
              >
              Password
            </label>
            <input
              type="password"
              value ={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="Enter admin here..."
              className="text-black mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Login
          </button>
        </form>
      </div>
     
    </div>
  );
};

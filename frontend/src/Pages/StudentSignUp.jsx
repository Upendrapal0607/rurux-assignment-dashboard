import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";
import { Button, useToast } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { AddNewStudent } from "../Redux/StudenReducer/Action";
export const StudentSignUp = ({ stream, getAllStudent }) => {

  const toast = useToast();
  const data = useSelector((state) => state.studentReducer);
  const navigate = useNavigate();
  const [sowPassword, setSowPassword] = useState(false);

  const dispatch = useDispatch();
  const [userDetails, setUserDetails] = useState({
    ID: "",
    year: "",
    username: "",
    password: "",
    stream: "",
  });

  const handleChangeDetails = async (e) => {
    const { name, value } = e.target;
    setUserDetails({ ...userDetails, [name]: value });
  };

  const handleNavigate = async (e) => {
    e.preventDefault();

    dispatch(AddNewStudent(userDetails))
      .then((res) => {
        getAllStudent();
      })

      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="min-h-[80vh] bg-gray-100 flex flex-col justify-center py-4 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Register new student.
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6 text-left" onSubmit={handleNavigate}>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                User Name
              </label>
              <div className="mt-1">
                <input
                  value={userDetails.username}
                  onChange={handleChangeDetails}
                  id="name"
                  autoComplete="name"
                  name="username"
                  type="text"
                  required
                  className="appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="ID"
                className="block text-sm font-medium text-gray-700"
              >
                Year
              </label>
              <div className="mt-1">
                <input
                  value={userDetails.year}
                  onChange={handleChangeDetails}
                  type="text"
                  id="year"
                  name="year"
                  autoComplete="year"
                  required
                  className="appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="ID"
                className="block text-sm font-medium text-gray-700"
              >
                User ID
              </label>
              <div className="mt-1">
                <input
                  value={userDetails.ID}
                  onChange={handleChangeDetails}
                  type="text"
                  id="ID"
                  name="ID"
                  autoComplete="ID"
                  required
                  className="appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <div className="mt-1 flex justify-center items-center">
                <input
                  onChange={handleChangeDetails}
                  id="password"
                  name="password"
                  value={userDetails.password}
                  type={!sowPassword ? "password" : "text"}
                  autoComplete="current-password"
                  required
                  className="appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />

                {sowPassword ? (
                  <FaRegEye
                    className="ml-[-30px] cursor-pointer"
                    onClick={() => setSowPassword(!sowPassword)}
                  />
                ) : (
                  <FaRegEyeSlash
                    className="ml-[-30px] cursor-pointer"
                    onClick={() => setSowPassword(!sowPassword)}
                  />
                )}
              </div>
              <div className="text-green-600">
                password lenth should be more than 8 contain number characters
                and special characters
              </div>
            </div>
            <div>
              <label
                htmlFor="Gender"
                className="block text-sm font-medium text-gray-700"
              >
                Strem
              </label>
              <div className="mt-1">
                <select
                  onChange={handleChangeDetails}
                  name="stream"
                  className="block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                  {stream?.map((item) => (
                    <option value={item.stream}>{item.stream}</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              {data?.isLoading ? (
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
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  SIGN UP
                </button>
              )}
            </div>
          </form>
          <div>
            <p className="mt-6 text-center text-sm text-gray-600">
              Already have an account?{" "}
              <Link
                to="/"
                className=" cursor-pointer font-medium text-indigo-600 hover:text-indigo-900"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

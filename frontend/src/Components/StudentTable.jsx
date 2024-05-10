import React from "react";

const StudentTable = ({ studentList = []  }) => {
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-semibold mb-4">Student Data</h1>
      <table className="min-w-full bg-white">
        <thead className="bg-gray-200">
          <tr>
            <th className="text-left py-2 px-4">Username</th>
            <th className="text-left py-2 px-4">ID</th>
            <th className="text-left py-2 px-4">Year</th>
            <th className="text-left py-2 px-4">Stream</th>
          </tr>
        </thead>
        <tbody className="text-start">
          {studentList?.map((student) => (
            <tr key={student._id}>
              <td className="border px-4 py-2 ">{student.username}</td>
              <td className="border px-4 py-2">{student.ID}</td>
              <td className="border px-4 py-2">{student.year}</td>
              <td className="border px-4 py-2">{student.stream}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentTable;

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "./Button";
import { deleteUser } from "../Redux/Action";
import Edit from "./Edit";

const Table = () => {
  const currentState = useSelector((state) => {
    return state.userReducer;
  });

  console.log("currentState=============>", currentState);

  const dispatch = useDispatch();

  return (
    <div className="mt-7 py-[.5rem]">
      <table className="table px-5 w-full">
        <thead className="border border-s-slate-800">
          <tr className="flex items-center">
            <th className="py-[.5rem] flex-1">Id</th>
            <th className="py-[.5rem] flex-1">Name</th>
            <th className="py-[.5rem] flex-1">Email</th>
            <th className="py-[.5rem] flex-1">Phone</th>
            <th className="py-[.5rem] flex-1">Job-title</th>
            <th className="py-[.5rem] flex-1">City</th>
            <th className="py-[.5rem] flex-1">Country</th>
            <th className="py-[.5rem] flex-1">Date</th>
            <th className="py-[.5rem] flex-1">Delete</th>
            <th className="py-[.5rem] flex-1">Edit</th>
          </tr>
        </thead>
        <tbody>
          {currentState.userList.map((item) => {
            return (
              <tr key={item.id} className="flex items-center">
                <td className="border border-slate-100 h-16 w-16 flex-1 flex items-center justify-center">
                  {item.id}
                </td>
                <td className="border border-slate-100 h-16 w-16 flex-1 flex items-center justify-center">
                  {item.name}
                </td>
                <td className="px-[1.5rem] border border-slate-100 h-16 w-16 flex-1 flex items-center justify-center">
                  {item.email}
                </td>
                <td className="border border-slate-100 h-16 w-16 flex-1 flex items-center justify-center">
                  {item.phone}
                </td>
                <td className="border border-slate-100 h-16 w-16 flex-1 flex items-center justify-center">
                  {item.job}
                </td>
                <td className="border border-slate-100 h-16 w-16 flex-1 flex items-center justify-center">
                  {item.city}
                </td>
                <td className="border border-slate-100 h-16 w-16 flex-1 flex items-center justify-center">
                  {item.country}
                </td>
                <td className="border border-slate-100 h-16 w-16 flex-1 flex items-center justify-center">
                  {item.date}
                </td>
                <td className="border border-slate-100 h-16 w-16 flex-1 flex items-center justify-center">
                  <Button
                    title={"Delete"}
                    className={`bg-red-500 hover:bg-red-400 text-white px-5 py-2  rounded-sm`}
                    onClick={() => dispatch(deleteUser(item.id))}
                  />
                </td>
                <td className=" border border-slate-100 h-16 flex-1 flex items-center justify-center">
                  <Edit item={item} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "./Button";
import {
  deleteUser,
  filterValue,
  resetFilter,
  searchValue,
} from "../Redux/Action";

import Edit from "./Edit";

const Table = () => {
  const currentState = useSelector((state) => {
    return state.userReducer;
  });

  console.log("currentState=============>", currentState);

  const dispatch = useDispatch();

  return (
    <>
      <div className="mt-3 gap-2 flex justify-center items-center">
        <input
          type="search"
          placeholder="Search........."
          className="border border-slate-200 px-3 h-[40px] rounded-sm w-full sm:w-[500px] lg:w-[600px]"
          value={currentState.searchedValue}
          onChange={(ev) => {
            dispatch(searchValue(ev.target.value));
          }}
        />
        <div className="pb-[.5rem]">
          <select
            required
            className="border-slate-300 border lg:w-[300px] outline-none pb-[.5rem] px-1.5 py-2 rounded-sm mt-2"
            value={currentState.selectCity}
            onChange={(ev) => {
              dispatch(filterValue(ev.target.value, currentState.selectJob));
            }}
          >
            <option
              value=""
              disabled
              selected
              hidden
              className="text-slate-400"
            >
              Select city.....
            </option>
            <option value="Mumbai">Mumbai</option>
            <option value="Pune">Pune</option>
            <option value="Banglore">Banglore</option>
            <option value="Kolkata">Kolkata</option>
            <option value="Hydrabad">Hydrabad</option>
            <option value="Delhi">Delhi</option>
            <option value="Noida">Noida</option>
          </select>
        </div>
        {/* <div className="pb-[2rem]">
          <label className="block pb-2 text-bold text-left">Job Title</label>
          <select
            required
            className="border-slate-300 border w-full outline-none pb-[.5rem] px-1.5 py-2 rounded-sm"
            value={currentState.selectJob}
            onChange={(ev) => {
              dispatch(filterValue(currentState.selectCity, ev.target.value));
            }}
          >
            <option
              value=""
              disabled
              selected
              hidden
              className="text-slate-400"
            >
              Choose job title...
            </option>
            <option value="Frontend developer">Frontend developer</option>
            <option value="React developer">React developer</option>
            <option value="Javascript developer">Javascript developer</option>
            <option value="Fullstack developer">Fullstack developer</option>
            <option value="Java developer">Java developer</option>
          </select>
        </div> */}
        {currentState.selectCity ? (
          <Button
            onClick={() => {
              // currentState.selectCity;
              dispatch(resetFilter());
            }}
            title="Reset"
            className="bg-slate-800 text-white px-5 py-2 rounded-md"
          />
        ) : null}
      </div>
      <div className="mt-7 py-[.5rem] w-full">
        <div className="overflow-x-auto sm:hidden">
          {/* Mobile and smaller devices */}
          <table className="table-auto border-collapse border border-slate-300 w-full">
            <thead className="bg-gray-100 border-b">
              <tr>
                <th className="px-2 py-1 text-[0.8rem]">Id</th>
                <th className="px-2 py-1 text-[0.8rem]">Name</th>
                <th className="px-2 py-1 text-[0.8rem]">Email</th>
                <th className="px-2 py-1 text-[0.8rem]">Phone</th>
                <th className="px-2 py-1 text-[0.8rem]">Job-title</th>
                <th className="px-2 py-1 text-[0.8rem]">City</th>
                <th className="px-2 py-1 text-[0.8rem]">Country</th>
                <th className="px-2 py-1 text-[0.8rem]">Date</th>
                <th className="px-2 py-1 text-[0.8rem]">Delete</th>
                <th className="px-2 py-1 text-[0.8rem]">Edit</th>
              </tr>
            </thead>
            <tbody>
              {currentState.filterData?.map((item) => (
                <tr key={item.id} className="border-b">
                  <td className="px-2 py-1 text-[0.7rem]">{item.id}</td>
                  <td className="px-2 py-1 text-[0.7rem]">{item.name}</td>
                  <td className="px-2 py-1 text-[0.7rem]">{item.email}</td>
                  <td className="px-2 py-1 text-[0.7rem]">{item.phone}</td>
                  <td className="px-2 py-1 text-[0.7rem]">{item.job}</td>
                  <td className="px-2 py-1 text-[0.7rem]">{item.city}</td>
                  <td className="px-2 py-1 text-[0.7rem]">{item.country}</td>
                  <td className="px-2 py-1 text-[0.7rem]">{item.date}</td>
                  <td className="px-2 py-1 text-center">
                    <button
                      className="bg-red-500 text-white px-2 py-1 rounded text-[0.7rem]"
                      onClick={() => dispatch(deleteUser(item.id))}
                    >
                      Delete
                    </button>
                  </td>
                  <td className="px-2 py-1 text-center">
                    <Edit item={item} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="hidden sm:flex flex-col w-full">
          {/* Flexbox layout for iPad Pro and Desktop */}
          <div className="flex bg-gray-100 border-b">
            <div className="flex-1 px-2 py-1 text-[1rem] font-semibold">Id</div>
            <div className="flex-1 px-2 py-1 text-[1rem] font-semibold">
              Name
            </div>
            <div className="flex-1 px-2 py-1 text-[1rem] font-semibold">
              Email
            </div>
            <div className="flex-1 px-2 py-1 text-[1rem] font-semibold">
              Phone
            </div>
            <div className="flex-1 px-2 py-1 text-[1rem] font-semibold">
              Job-title
            </div>
            <div className="flex-1 px-2 py-1 text-[1rem] font-semibold">
              City
            </div>
            <div className="flex-1 px-2 py-1 text-[1rem] font-semibold">
              Country
            </div>
            <div className="flex-1 px-2 py-1 text-[1rem] font-semibold">
              Date
            </div>
            <div className="flex-1 px-2 py-1 text-[1rem] font-semibold text-center">
              Delete
            </div>
            <div className="flex-1 px-2 py-1 text-[1rem] font-semibold text-center">
              Edit
            </div>
          </div>
          {currentState.filterData?.map((item) => (
            <div key={item.id} className="flex border-b items-center">
              <div className="flex-1 px-2 py-1 text-[0.9rem]">{item.id}</div>
              <div className="flex-1 px-2 py-1 text-[0.9rem]">{item.name}</div>
              <div className="flex-1 px-2 py-1 text-[0.9rem]">{item.email}</div>
              <div className="flex-1 px-2 py-1 text-[0.9rem]">{item.phone}</div>
              <div className="flex-1 px-2 py-1 text-[0.9rem]">{item.job}</div>
              <div className="flex-1 px-2 py-1 text-[0.9rem]">{item.city}</div>
              <div className="flex-1 px-2 py-1 text-[0.9rem]">
                {item.country}
              </div>
              <div className="flex-1 px-2 py-1 text-[0.9rem]">{item.date}</div>
              <div className="flex-1 px-2 py-1 text-center">
                <button
                  className="bg-red-500 text-white px-3 py-1 rounded text-[0.9rem]"
                  onClick={() => dispatch(deleteUser(item.id))}
                >
                  Delete
                </button>
              </div>
              <div className="flex-1 px-2 py-1 text-center">
                <Edit item={item} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Table;

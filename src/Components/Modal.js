import React, { useState } from "react";
import Button from "./Button";

const Modal = ({ children, formTitle, setIsActive }) => {
  return (
    <>
      <div className="top-0 left-0 h-[100vh] w-[100vw] flex items-center justify-center bg-[rgba(255,255,255,0.9)]  absolute overflow-auto ">
        <div className="px-[1rem]">
          <div>
            <div className=" border-gray-300 flex items-center justify-center">
              <div className="bg-white mt-[10rem] mb-5 border border-slate-50 rounded-sm shadow-lg">
                <div className="border flex justify-between px-[1rem] py-[1rem]">
                  <h5 className="text-2xl ">
                    {formTitle ? formTitle : "Modal Title"}
                  </h5>
                  <Button
                    title={"X"}
                    className={`text-2xl  text-red-500`}
                    onClick={() => setIsActive(false)}
                  />
                </div>
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;

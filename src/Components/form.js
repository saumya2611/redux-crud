import React, { useEffect, useState } from "react";
import Button from "./Button";
import Modal from "./Modal";
import { useDispatch, useSelector } from "react-redux";
import { createUser } from "../Redux/Action";
import { toast } from "react-toastify";

const Form = () => {
  const [isActive, setIsActive] = useState(false);
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    job: "",
    city: "",
    country: "",
    date: "",
  });

  const currentState = useSelector((state) => {
    return state.userReducer;
  });

  console.log("currentState========>", currentState);

  const dispatch = useDispatch();

  const fillData = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email regex
    const phoneRegex = /^[0-9]{10}$/; // Matches exactly 10 digits

    if (!userData.name.trim()) {
      toast.warn("Name is required");
      return;
    }
    if (!userData.email) {
      toast.warn("Email is required");
      return;
    } else {
      if (!emailRegex.test(userData.email)) {
        toast.warn("Enter a valid email address.");
        return;
      }
    }
    if (!userData.phone) {
      toast.warn("Phone number is required !");
      return;
    } else {
      if (!phoneRegex.test(userData.phone)) {
        toast.warn("Enter a valid 10-digit phone number.");
        return;
      }
    }
    if (!userData.job) {
      toast.warn("Job field is required");
      return;
    } else if (!userData.city) {
      toast.warn("Please select city !");
      return;
    } else if (!userData.country) {
      toast.warn("Please select country !");
      return;
    } else if (!userData.date) {
      toast.warn("Please select date !");
      return;
    }

    dispatch(createUser(userData));
    setIsActive(false);

    setUserData({
      name: "",
      email: "",
      phone: "",
      job: "",
      city: "",
      country: "",
      date: "",
    });
  };

  // useEffect(() => {
  //   console.log("userData============>", userData);
  // }, [userData]);

  return (
    <div>
      {isActive === true ? (
        <Modal formTitle="User Details" setIsActive={setIsActive}>
          <div className="px-[5rem]">
            <div className="mt-[2rem] mb-[2rem]">
              <div className="pb-[2rem]">
                <label className="block pb-2 text-bold text-left">Name</label>
                <input
                  type="text"
                  placeholder="Enter name....."
                  className=" border-slate-300 border-b px-3 py-2 w-[400px] outline-none rounded-sm "
                  value={userData.name}
                  onChange={(ev) =>
                    setUserData({ ...userData, name: ev.target.value })
                  }
                />
              </div>
              <div className="pb-[2rem]">
                <label className="block pb-2 text-bold text-left">Email</label>
                <input
                  type="email"
                  placeholder="Enter email....."
                  className="border-slate-300 border-b px-3 py-2 w-[400px] outline-none rounded-sm"
                  value={userData.email}
                  onChange={(ev) =>
                    setUserData({ ...userData, email: ev.target.value })
                  }
                />
              </div>
              <div className="pb-[2rem]">
                <label className="block pb-2 text-bold text-left">Phone</label>
                <input
                  type="number"
                  placeholder="Enter phone....."
                  className="border-slate-300 border-b px-3 py-2 w-[400px] outline-none rounded-sm"
                  value={userData.phone}
                  onChange={(ev) =>
                    setUserData({ ...userData, phone: ev.target.value })
                  }
                />
              </div>
              <div className="pb-[2rem]">
                <label className="block pb-2 text-bold text-left">
                  Job Title
                </label>
                <select
                  required
                  className="border-slate-300 border-b w-full outline-none pb-[.5rem] px-1.5"
                  value={userData.job}
                  onChange={(ev) =>
                    setUserData({ ...userData, job: ev.target.value })
                  }
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
                  <option value="Javascript developer">
                    Javascript developer
                  </option>
                  <option value="Fullstack developer">
                    Fullstack developer
                  </option>
                  <option value="Java developer">Java developer</option>
                </select>
              </div>
              <div className="pb-[2rem]">
                <label className="block pb-2 text-bold text-left">City</label>
                <select
                  required
                  className="border-slate-300 border-b w-full outline-none pb-[.5rem] px-1.5"
                  value={userData.city}
                  onChange={(ev) =>
                    setUserData({ ...userData, city: ev.target.value })
                  }
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
              <div className="pb-[2rem]">
                <label className="block pb-2 text-bold text-left">
                  Country
                </label>
                <select
                  required
                  className="border-slate-300 border-b w-full outline-none pb-[.5rem] px-1.5"
                  value={userData.country}
                  onChange={(ev) =>
                    setUserData({ ...userData, country: ev.target.value })
                  }
                >
                  <option
                    value=""
                    disabled
                    selected
                    hidden
                    className="text-slate-400"
                  >
                    Select country.....
                  </option>
                  <option value="Usa">Usa</option>
                  <option value="America">America</option>
                  <option value="London">London</option>
                  <option value="Dubai">Dubai</option>
                  <option value="Chaina">Chaina</option>
                  <option value="France">France</option>
                  <option value="Europe">Europe</option>
                </select>
              </div>
              <div className="pb-[2rem]">
                <label className="block pb-2 text-bold text-left">Date</label>
                <input
                  type="date"
                  placeholder="Enter date....."
                  className=" border-slate-300 border-b px-3 py-2 w-[400px] outline-none rounded-sm "
                  value={userData.date}
                  onChange={(ev) =>
                    setUserData({ ...userData, date: ev.target.value })
                  }
                />
              </div>
            </div>
            <div className="pb-[2rem]">
              <Button
                title={"Submit"}
                className={`pb-[.5rem] px-[7rem] py-3 bg-slate-500 text-white rounded-sm outline-none hover:bg-slate-400`}
                onClick={() => {
                  fillData();
                }}
              />
            </div>
          </div>
        </Modal>
      ) : null}
      <div className="flex items-center justify-end ">
        <Button
          title={"Add User"}
          className={`bg-slate-500 text-white rounded-sm px-10 py-2 mt-2 mr-3`}
          onClick={() => setIsActive(true)}
        />
      </div>
    </div>
  );
};

export default Form;

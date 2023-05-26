"use client";

import React, { useState } from "react";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { baseUrl } from "@/lib/config";
import { useRouter } from "next/navigation";

export const USER_DEFAULT_VALUE = {
  User_Name: "",
  User_Email: "",
  User_Password: "",
  Confirm_Password: "",
};

const Signup = () => {
  const router = useRouter();
  const [disable, setdisable] = useState(false);
  const [formData, setFormData] = useState(USER_DEFAULT_VALUE);
  const [passwordError, setPasswordError] = useState();

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const saveUserCall = async (userData) => {
    setFormData(USER_DEFAULT_VALUE);
    try {
      const res = await axios.post(`${baseUrl}/api/auth/signup`, userData);
      const result = await res.data;
      toast.success(result.message);
      setTimeout(() => {
        router.push("/auth/login");
      }, 2000);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const submithandler = (e) => {
    e.preventDefault();
    setdisable(true);
    if (!formData) return toast.error("You can't submit empty form!");
    if (
      !formData.User_Name ||
      !formData.User_Email ||
      !formData.User_Password
    ) {
      return toast.error("All fields are required!!");
    }

    //Password@123
    if (formData.User_Password !== formData.Confirm_Password)
      return toast.error("Password and Confirm Password didn't match!");
    delete formData.Confirm_Password;
    saveUserCall(formData);
    setdisable(false);
  };

  return (
    <>
      <Toaster
        toastOptions={{ className: "text-[12px]" }}
        position="top-center"
        reverseOrder={false}
      />
      <form onSubmit={submithandler}>
        <h2 className="text-2xl font-bold text-center mb-5 text-white">
          Create Account
        </h2>
        <div className="mb-3 gap-3">
          <label className="text-white mb-1 inline-block">Name</label>
          <input
            onChange={changeHandler}
            type="text"
            name="User_Name"
            value={formData.User_Name}
            className="border-white rounded-md h-[40px] w-full outline-none px-3"
          />
        </div>
        <div className="mb-3 gap-3">
          <label className="text-white mb-1 inline-block">Email</label>
          <input
            onChange={changeHandler}
            type="email"
            name="User_Email"
            value={formData.User_Email}
            className="border-white rounded-md h-[40px] w-full outline-none px-3"
          />
        </div>
        <div className="mb-3 gap-3">
          <label className="text-white mb-1 inline-block">Password</label>
          <input
            onChange={changeHandler}
            type="password"
            name="User_Password"
            value={formData.User_Password}
            className="border-white rounded-md h-[40px] w-full outline-none px-3"
          />
          {passwordError && (
            <p className="text-red-400 mt-1 text-[12px]">{passwordError}</p>
          )}
        </div>
        <div className="mb-6 gap-3">
          <label className="text-white mb-1 inline-block">
            Confirm Password
          </label>
          <input
            onChange={changeHandler}
            type="password"
            name="Confirm_Password"
            value={formData.Confirm_Password}
            className="border-white rounded-md h-[40px] w-full outline-none px-3"
          />
        </div>
        <div className="mb-3 gap-3">
          <button
            className={`w-full rounded-md bg-red-600 px-9 py-2 text-white ${
              disable ? "pointer-events-none" : "pointer-events-auto"
            }`}
          >
            Submit
          </button>
        </div>
        <p className="text-white text-[12px] text-center">
          You already have an account,{" "}
          <Link className="underline" href={"/auth/login"}>
            Login
          </Link>{" "}
          here.
        </p>
      </form>
    </>
  );
};

export default Signup;

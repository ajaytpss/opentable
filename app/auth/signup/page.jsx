"use client";

import React, { useContext, useState } from "react";
import Link from "next/link";
import toast from "react-hot-toast";
import axios from "axios";
import { baseUrl } from "@/lib/config";
import { useRouter } from "next/navigation";
import useAuth from "@/hooks/useAuth";
import { AuthenticationContext } from "@/app/context/authContext";
//Password@123

const Signup = () => {
  const defaultData = {
    User_Name: "",
    User_Email: "",
    User_Password: "",
    Confirm_Password: "",
  };
  const [formData, setFormData] = useState(defaultData);
  const { signUp } = useAuth();
  const { authLoading } = useContext(AuthenticationContext);

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const submithandler = (e) => {
    e.preventDefault();
    if (
      !formData ||
      !formData?.User_Name ||
      !formData?.User_Email ||
      !formData?.User_Password
    ) {
      return toast.error("All fields are required!!");
    }
    if (formData.User_Password !== formData.Confirm_Password)
      return toast.error("Password and Confirm Password didn't match!");
    setFormData(defaultData);
    signUp({
      User_Name: formData.User_Name,
      User_Email: formData.User_Email,
      User_Password: formData.User_Password,
    });
  };

  return (
    <>
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
            value={formData?.User_Name}
            className="border-white rounded-md h-[40px] w-full outline-none px-3"
          />
        </div>
        <div className="mb-3 gap-3">
          <label className="text-white mb-1 inline-block">Email</label>
          <input
            onChange={changeHandler}
            type="email"
            name="User_Email"
            value={formData?.User_Email}
            className="border-white rounded-md h-[40px] w-full outline-none px-3"
          />
        </div>
        <div className="mb-3 gap-3">
          <label className="text-white mb-1 inline-block">Password</label>
          <input
            onChange={changeHandler}
            type="password"
            name="User_Password"
            value={formData?.User_Password}
            className="border-white rounded-md h-[40px] w-full outline-none px-3"
          />
        </div>
        <div className="mb-6 gap-3">
          <label className="text-white mb-1 inline-block">
            Confirm Password
          </label>
          <input
            onChange={changeHandler}
            type="password"
            name="Confirm_Password"
            value={formData?.Confirm_Password}
            className="border-white rounded-md h-[40px] w-full outline-none px-3"
          />
        </div>
        <div className="mb-3 gap-3">
          <button
            className={`w-full rounded-md bg-red-600 px-9 py-2 text-white ${
              authLoading ? "pointer-events-none" : "pointer-events-auto"
            }`}
          >
            {authLoading ? "Loading..." : "Submit"}
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

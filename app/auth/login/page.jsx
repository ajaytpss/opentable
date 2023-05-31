"use client";

import React, { useContext, useState } from "react";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";
import { AuthenticationContext } from "@/app/context/authContext";
import useAuth from "@/hooks/useAuth";
// Password@123

const Login = () => {
  const { signIn } = useAuth();
  const [loginData, setLoginData] = useState({
    User_Email: "",
    User_Password: "",
  });
  const { authLoading } = useContext(AuthenticationContext);

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };
  const loginHandler = (e) => {
    e.preventDefault();
    if (!loginData?.User_Email) return toast.error("Please enter your Email");
    if (!loginData?.User_Password)
      return toast.error("Please enter your Password");
    setLoginData({
      User_Email: "",
      User_Password: "",
    });
    signIn({
      User_Email: loginData.User_Email,
      User_Password: loginData.User_Password,
    });
  };

  return (
    <>
      <form onSubmit={loginHandler}>
        <h2 className="text-2xl font-bold text-center mb-5 text-white">
          Login
        </h2>
        <div className="mb-3 gap-3">
          <label className="text-white mb-1 inline-block">Email</label>
          <input
            onChange={inputHandler}
            type="email"
            name="User_Email"
            value={loginData?.User_Email}
            className="border-white rounded-md h-[40px] w-full outline-none px-3"
          />
        </div>
        <div className="mb-6 gap-3">
          <label className="text-white mb-1 inline-block">Password</label>
          <input
            onChange={inputHandler}
            type="password"
            name="User_Password"
            value={loginData?.User_Password}
            className="border-white rounded-md h-[40px] w-full outline-none px-3"
          />
        </div>
        <div className="mb-3 gap-3">
          <button className="w-full rounded-md bg-red-600 px-9 py-2 text-white">
            {authLoading ? "Loading..." : "Submit"}
          </button>
        </div>
        <p className="text-white text-[12px] text-center">
          Your don't have an account,{" "}
          <Link className="underline" href={"/auth/signup"}>
            Signup
          </Link>{" "}
          here.
        </p>
      </form>
    </>
  );
};

export default Login;

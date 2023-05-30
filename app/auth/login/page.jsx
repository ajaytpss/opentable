"use client";

import React, { useState } from "react";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";
import axios from "axios";
import { baseUrl } from "@/lib/config";

export const DEFAULT_DATA = [
  {
    User_Email: "",
    User_Password: "",
  },
];

const Login = () => {
  const router = useRouter();
  const [loginData, setLoginData] = useState(DEFAULT_DATA);
  const [loading, setLoading] = useState(false);

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const loginCall = async (data) => {
    setLoading(true);
    setLoginData(DEFAULT_DATA);
    try {
      const res = await axios.post(`${baseUrl}/api/auth/login`, data);
      const result = await res.data;
      localStorage.setItem("login", true);
      toast.success(result.message);
      return router.push("/");
    } catch (error) {
      toast.error(error.response.data.message);
    }
    setLoading(false);
  };

  const loginHandler = (e) => {
    e.preventDefault();
    if (!loginData.User_Email) return toast.error("Please enter your Email");
    if (!loginData.User_Password)
      return toast.error("Please enter your Password");
    loginCall(loginData);
  };

  return (
    <>
      <Toaster
        toastOptions={{ className: "text-[12px]" }}
        position="top-center"
        reverseOrder={false}
      />
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
            value={loginData.User_Email}
            className="border-white rounded-md h-[40px] w-full outline-none px-3"
          />
        </div>
        <div className="mb-6 gap-3">
          <label className="text-white mb-1 inline-block">Password</label>
          <input
            onChange={inputHandler}
            type="password"
            name="User_Password"
            value={loginData.User_Password}
            className="border-white rounded-md h-[40px] w-full outline-none px-3"
          />
        </div>
        <div className="mb-3 gap-3">
          <button className="w-full rounded-md bg-red-600 px-9 py-2 text-white">
            {loading ? "Loading..." : "Submit"}
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

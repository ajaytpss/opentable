"use client";

import React, { useContext, useEffect } from "react";
import { AuthenticationContext } from "../context/authContext";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

const layout = ({ children }) => {
  const { authData } = useContext(AuthenticationContext);
  const router = useRouter();

  useEffect(() => {
    if (authData) {
      toast.error("You are already logged in");
      return router.push("/");
    }
  }, []);

  return (
    <div className="p-10 border flex items-center justify-center gap-5 min-h-[80vh]">
      <div className="border w-[400px] p-8 rounded-mdlogin bg-gradient-to-r from-[#0f1f47] to-[#5f6984]">
        {children}
      </div>
    </div>
  );
};

export default layout;

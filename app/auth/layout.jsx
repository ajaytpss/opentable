"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import useAuth from "@/hooks/useAuth";

const layout = ({ children }) => {
  const { isLoggedIn } = useAuth();
  const router = useRouter();
  const [loggedIn, setLoggedIn] = useState();

  useEffect(() => {
    const loggedinCheck = isLoggedIn();
    setLoggedIn(loggedinCheck);
  }, []);

  if (loggedIn) {
    toast.error("You are already logged in");
    return router.push("/");
  }
  return (
    <div className="p-10 border flex items-center justify-center gap-5 min-h-[80vh]">
      <div className="border w-[400px] p-8 rounded-mdlogin bg-gradient-to-r from-[#0f1f47] to-[#5f6984]">
        {children}
      </div>
    </div>
  );
};

export default layout;

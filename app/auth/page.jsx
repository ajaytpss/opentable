"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

const Auth = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/auth/login");
  }, []);
  return (
    <>
      <div></div>
    </>
  );
};

export default Auth;

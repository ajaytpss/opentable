"use client";

import Link from "next/link";
import Image from "next/image";
import { useContext, useEffect } from "react";
import { AuthenticationContext } from "../context/authContext";
import useAuth from "@/hooks/useAuth";

const Navbar = () => {
  const { authData } = useContext(AuthenticationContext);
  const { logOut, isLoggedIn } = useAuth();

  useEffect(() => {
    isLoggedIn();
  }, []);

  return (
    <nav className="bg-white p-2 flex justify-between">
      <Link href="/" className="font-bold text-gray-700 text-2xl w-[160px]">
        <Image
          src={"/logo.svg"}
          alt="opentable"
          priority
          width={160}
          height={35.5}
          className="w-full h-auto"
        />
      </Link>
      <div>
        <div className="flex items-center gap-3">
          {authData ? (
            <button
              onClick={() => logOut()}
              className="bg-blue-400 text-white border p-1 px-4 rounded"
            >
              Logout
            </button>
          ) : (
            <>
              <Link className="border p-1 px-4 rounded" href="/business">
                List your restaurant
              </Link>
              <Link
                href={"/auth/login"}
                className="bg-blue-400 text-white border p-1 px-4 rounded"
              >
                Login
              </Link>
              <Link href={"/auth/signup"} className="border p-1 px-4 rounded">
                Sign up
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

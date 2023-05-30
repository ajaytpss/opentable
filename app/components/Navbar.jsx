"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [loggedIn, setLoggedIn] = useState();

  useEffect(() => {
    setLoggedIn(localStorage.getItem("login"));
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
          {loggedIn ? (
            <Link
              onClick={() => {
                localStorage.removeItem("login"), setLoggedIn(false);
              }}
              href={"/auth/login"}
              className="bg-blue-400 text-white border p-1 px-4 rounded"
            >
              Logout
            </Link>
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

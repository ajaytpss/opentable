"use client";

import { AuthenticationContext } from "@/app/context/authContext";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";

const Header = () => {
  const { setSearchKeyword, searchKeyword } = useContext(AuthenticationContext);

  const router = useRouter();
  const searchInput = (e) => {
    setSearchKeyword(e.target.value);
  };

  const searchHandlerFun = (e) => {
    e.preventDefault();
    router.push(`/search?keywords=${searchKeyword}`);
  };
  return (
    <div className="h-64 bg-gradient-to-r from-[#0f1f47] to-[#5f6984] p-2">
      <div className="text-center mt-10">
        <h1 className="text-white text-5xl font-bold mb-2">
          Find your table for any occasion
        </h1>
        {/* SEARCH BAR */}
        <div className="text-left text-lg py-3 m-auto flex justify-center">
          <input
            className="rounded  mr-3 p-2 w-[450px]"
            type="text"
            placeholder="Search Restaurant"
            onChange={searchInput}
          />
          <button
            onClick={searchHandlerFun}
            className="rounded bg-red-600 px-9 py-2 text-white"
          >
            Let's go
          </button>
        </div>
        {/* SEARCH BAR */}
      </div>
    </div>
  );
};

export default Header;

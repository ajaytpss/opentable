"use client";
import { AuthenticationContext } from "@/app/context/authContext";
import { baseUrl } from "@/lib/config";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";

const Header = () => {
  const { searchKeyword, setSearchKeyword } = useContext(AuthenticationContext);
  const [input, setInput] = useState();
  const router = useRouter();
  const searchInput = (e) => {
    setInput(e.target.value);
  };
  const searchInputHandler = (e) => {
    e.preventDefault();
    if (input) {
      setSearchKeyword(input);
      router.push(`${baseUrl}/search?keywords=${input}`);
    }
  };
  return (
    <div className="bg-gradient-to-r to-[#5f6984] from-[#0f1f47] p-2">
      <div className="text-left text-lg py-3 m-auto flex justify-center">
        <input
          onChange={searchInput}
          className="rounded  mr-3 p-2 w-[450px]"
          type="text"
          defaultValue={searchKeyword ? searchKeyword : ""}
          placeholder="State, city or town"
        />
        <button
          disabled={input ? false : true}
          onClick={searchInputHandler}
          className="rounded bg-red-600 px-9 py-2 text-white"
        >
          Let's go
        </button>
      </div>
    </div>
  );
};

export default Header;

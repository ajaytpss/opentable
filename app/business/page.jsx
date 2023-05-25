import Link from "next/link";
import React from "react";

const Partner = () => {
  return (
    <>
      <div className="p-10 border flex items-center justify-center gap-5 h-[80vh]">
        <Link
          className="bg-blue-400 text-white border p-1 px-4 rounded"
          href={"/business/login"}
        >
          Login as business
        </Link>
        <Link
          className="bg-blue-400 text-white border p-1 px-4 rounded"
          href={"/business/signup"}
        >
          Signup as business
        </Link>
      </div>
    </>
  );
};

export default Partner;

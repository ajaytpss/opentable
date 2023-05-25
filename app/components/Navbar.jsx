import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-white p-2 flex justify-between">
      <Link href="/" className="font-bold text-gray-700 text-2xl">
        {" "}
        OpenTable{" "}
      </Link>
      <div>
        <div className="flex items-center gap-3">
          <Link className="border p-1 px-4 rounded" href="/business">
            List your restaurant
          </Link>
          <button className="bg-blue-400 text-white border p-1 px-4 rounded">
            Sign in
          </button>
          <button className="border p-1 px-4 rounded">Sign up</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

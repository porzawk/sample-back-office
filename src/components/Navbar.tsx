import { BsSearch } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";

const SearchBox = () => {
  return (
    <form className="pl-2">
      <label className="mb-2 text-sm font-medium sr-only">Search</label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
          <BsSearch />
        </div>
        <input
          type="search"
          id="default-search"
          className="block w-80 p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500  placeholder-gray-400 "
          placeholder="Search..."
          required
        />
      </div>
    </form>
  );
};

const Account = () => {
  return (
    <a href={`/account`}>
      <div className="flex gap-2 py-2 px-3 items-center rounded-lg  hover:bg-[#F5F5F5]">
        <h6>Account</h6>
        <FaUserCircle size={20} />
      </div>
    </a>
  );
};

const Navbar = () => {
  return (
    <nav className="fixed flex justify-between items-center w-full h-12 z-20 pl-56 bg-white border-0 border-b border-solid border-[#E0E0E0]">
      <SearchBox />
      <div className="mr-2">
        <Account />
      </div>
    </nav>
  );
};

export default Navbar;

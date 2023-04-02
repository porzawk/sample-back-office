import React, { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { categories } from "../constants";
import { IconContext } from "react-icons";
import logo from "../assets/images/logo.png";

type MenuItemProps = {
  index: number;
  id: string | number;
  title: string;
  icon: ReactNode;
};

const MenuItem = ({ index, id, title, icon }: MenuItemProps) => {
  const navigate = useNavigate();
  const handleClick = (id: string | number) => {
    navigate(`/${id}`);
  };
  return (
    <li>
      <span
        onClick={() => handleClick(id)}
        className="flex items-center p-2 px-3 text-base font-normal text-[#4C4C4C] rounded-lg hover:bg-[#F5F5F5] cursor-pointer"
      >
        {icon}
        <span className="ml-3">{title}</span>
      </span>
    </li>
  );
};

const Sidebar = () => {
  return (
    <aside className="fixed top-0 left-0 z-40 w-56 h-screen  transition-transform -translate-x-full sm:translate-x-0 border-0 border-r border-solid border-[#E0E0E0]">
      <div className="h-full overflow-y-auto bg-white scrollbar-thin scrollbar-thumb-[#363636] scrollbar-track-[#1f1f1f]">
        <IconContext.Provider value={{ size: "24px" }}>
          <div className="flex justify-center items-center py-5">
            <img
              src={logo}
              alt="Picture of the author"
              width={50}
              height={50}
              className="object-cover"
            />
            <span className="text-black px-2 font-bold text-lg">
              Administrator
            </span>
          </div>
          <hr className="h-px mb-2 bg-gray-200 border-0 "></hr>
          <ul className="space-y-1">
            <p className="text-gray-500 ml-3">Categories</p>
            {categories.map((item, index) => (
              <MenuItem key={index} index={index} {...item} />
            ))}
          </ul>
        </IconContext.Provider>
      </div>
    </aside>
  );
};

export default Sidebar;

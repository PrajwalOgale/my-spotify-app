import React from "react";
import { BsSpotify, BsSearch } from "react-icons/bs";
import { BiHomeAlt } from "react-icons/bi";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="flex flex-row md:flex-col  justify-between items-center md:justify-start bg-black md:w-52 p-4">
      <div>
        <Link to="/">
          <div className="flex gap-1 my-3 cursor-pointer ">
            <BsSpotify color="white" size={40} />
            <h1 className="text-white text-3xl font-semibold">Spotify</h1>
          </div>
        </Link>
      </div>
      <div className="md:mt-10">
        <ul className=" flex md:flex-col gap-4">
          <li className="p-1">
            <Link to="/">
              <div className="flex justify-start items-center cursor-pointer rounded-md px-1 py-2 hover:bg-[#282828] gap-1">
                <BiHomeAlt />
                <h4 className="hidden sm:block">Home</h4>
              </div>
            </Link>
          </li>
          <li className="p-1">
            <Link to="/search">
              <div className="flex justify-start items-center cursor-pointer rounded-md px-1 py-2 hover:bg-[#282828] gap-1">
                <BsSearch />
                <h4 className="hidden sm:block">Search</h4>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;

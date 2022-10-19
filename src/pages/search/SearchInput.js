import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";

const SearchInput = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="flex justify-center items-center py-8">
      <Link to={`/search/term=${searchTerm}`}>
        <button className="float-right border-t-2 border-l-2 border-b-2 p-[0.44rem] rounded-l-full">
          <BsSearch size={22} />
        </button>
      </Link>
      <div>
        <input
          placeholder="Search song"
          type="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="rounded-r-full h-10 w-[250px] md:w-[350px] border-r-2 border-t-2 border-b-2 bg-transparent font-medium px-3 outline-none"
        />
      </div>
    </div>
  );
};

export default SearchInput;

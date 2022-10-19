import React from "react";
import SearchInput from "../pages/search/SearchInput";
import BrowseCard from "../pages/search/BrowseCard";
import SearchByTypes from "../pages/search/SearchByTypes";
import { Routes, Route } from "react-router-dom";
import SearchByTerm from "../pages/search/SearchByTerm";

const Search = () => {

  return (
    <div className="w-[100%] h-[100%] overflow-scroll">
      <Routes>
        <Route 
        path="/" 
        element={
        <div className="h-[100%]">
          <SearchInput />
          <BrowseCard/>
        </div>
        } />
        <Route path="/:id" element={<SearchByTypes/>} />
        <Route path="/term=:id" element={<SearchByTerm/>} />
      </Routes>
    </div>
  );
};

export default Search;

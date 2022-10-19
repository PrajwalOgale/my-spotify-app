import React from "react";
import GenreCard from "./GenreCard";
import { AllGenre } from "./AllGenre";
import { Link } from "react-router-dom";

const BrowseCard = () => {
  return (
    <div className="flex flex-wrap justify-center gap-2 m-[0.3rem] md:mx-[2rem] ">
      {AllGenre.map((genre, i) => {
        return (
            <Link to={`/search/${genre.value}`} className="w-[9rem] h-[7rem] md:w-[15rem] md:h-[12rem] ">
              <GenreCard key={i} type={genre.title} color={genre.color} />
            </Link>
        );
      })}
    </div>
  );
};

export default BrowseCard;

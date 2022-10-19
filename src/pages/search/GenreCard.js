import React from "react";

const GenreCard = ({ type, color }) => {
  return (
      <div className={`flex justify-center items-center w-full h-full md:text-xl md:font-semibold rounded-md`} style={{background:color}}>
        {type}
      </div>
  );
};

export default GenreCard;

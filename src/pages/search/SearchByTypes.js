import React from "react";
import { useParams } from "react-router-dom";
import Error from "../../components/Error";
import Loader from "../../components/Loader";
import SongCard from "../../components/SongCard";
import { useGetByGenreQuery } from "../../redux/feature/musicApi";

const SearchByTypes = () => {
  const { id } = useParams();

  let content;
  const { data, isError, isSuccess, isLoading } = useGetByGenreQuery(id);

  if (isLoading) {
    content = <Loader />;
  } else if (isSuccess) {
    content = data.map((card, index) => {
      return (
        <SongCard
          key={card.key}
          image={card?.images}
          song={card?.hub}
          subtitle={card?.subtitle}
          title={card?.title}
          songDetails={card}
          data={data}
          index={index}
        />
      );
    });
  } else if (isError) {
    content = <Error/>;
  }

  return (
    <div className="h-[100%] flex flex-col gap-2 pl-10 pr-0 py-2 justify-start items-start">
      <h3 className="text-4xl font-semibold px-1 mt-5 tracking-wider">{id}</h3>
      <div className="h-[100%] w-[100%] flex flex-wrap justify-start items-center gap-3">
        {content}
      </div>
    </div>
  );
};

export default SearchByTypes;

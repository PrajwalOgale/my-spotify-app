import React from "react";
import { useParams } from "react-router-dom";
import Error from "../../components/Error";
import Loader from "../../components/Loader";
import SongCard from "../../components/SongCard";
import { useGetBySearchQuery } from "../../redux/feature/musicApi";

const SearchByTerm = () => {
  const { id } = useParams();

  let content;
  let songTracks = [];
  const { data, isError, isSuccess, isLoading } = useGetBySearchQuery(id);

  if (isLoading) {
    content = <Loader />;
  } else if (isSuccess) {
    data.tracks.hits.forEach((element, i) => {
      songTracks[i] = element.track;
    });

    content = data.tracks.hits.map((card, index) => {
      return (
        <SongCard
          key={card?.track?.key}
          image={card?.track?.images}
          song={card?.track?.hub}
          subtitle={card?.track?.subtitle}
          title={card?.track?.title}
          songDetails={card?.track}
          data={songTracks}
          index={index}
        />
      );
    });
  } else if (isError) {
    content = <Error />;
  }

  return (
    <div className="h-[100%] flex flex-col gap-2 pl-10 pr-0 py-2 justify-start items-start">
      <h3 className="text-4xl font-semibold px-5 mt-5 tracking-wider">
        {id.toLocaleUpperCase()}
      </h3>
      <div className="h-[100%] w-[100%] flex flex-wrap justify-center md:justify-start items-center gap-3">
        {content}
      </div>
    </div>
  );
};

export default SearchByTerm;

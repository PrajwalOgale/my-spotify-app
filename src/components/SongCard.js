import React from "react";
import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { selectSong, playPause } from "../redux/feature/playerSlice";

const SongCard = ({ image, subtitle, title, songDetails, data, index }) => {
  const { isPlaying, activeSong } = useSelector((state) => state.player);
  const dispatch = useDispatch();

  const handlePlaySong = () => {
    dispatch(selectSong({ data, songDetails, index }));
    dispatch(playPause(true));
  };

  return (
    <div
      className="flex flex-col md:m-5 m-3 px-4 py-4 cursor-pointer bg-[#181818] justify-center items-center rounded-lg"
      onClick={() => handlePlaySong()}
    >
      <div className="relative md:w-44 md:h-48 sm:w-28 sm:h-28 w-20 h-20 object-cover group">
        <img className="w-full rounded-lg" src={image?.coverart} alt={`${title}`} />
        <div
          className={`absolute inset-0 justify-center items-center bg-black bg-opacity-60 group-hover:flex ${
            activeSong?.title === title
              ? "flex bg-black bg-opacity-60"
              : "hidden"
          }`}
        >
          {activeSong?.title === title && isPlaying ? (
            <AiFillPauseCircle size={40} fill="#4cbb17" />
          ) : (
            <AiFillPlayCircle size={40} fill="#4cbb17" />
          )}
        </div>
      </div>
      <div className="flex flex-col md:px-1 justify-start items-start md:w-40 sm:w-28 w-20">
        <p className="w-full text-xl truncate">{title}</p>
        <p className="w-full truncate">{subtitle}</p>
      </div>
    </div>
  );
};

export default SongCard;

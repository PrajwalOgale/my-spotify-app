import React from "react";
import {
  AiFillPlayCircle,
  AiFillPauseCircle,
  AiFillStepBackward,
  AiFillStepForward,
} from "react-icons/ai";
import { BiShuffle } from "react-icons/bi";

const Controls = ({
  handlePlayPause,
  handleNextSong,
  handlePrevSong,
  handleShuffle,
  isPlaying,
}) => {

  return (
    <div className="flex justify-center items-center w-[100%] ">
      <div className="mx-0 md:mx-2  cursor-pointer" onClick={handleShuffle}>
        <BiShuffle size={20} />
      </div>
      <div className="mx-1 md:mx-2 cursor-pointer" onClick={handlePrevSong}>
        <AiFillStepBackward size={20} />
      </div>
      <div className="mx-1 md:mx-2 cursor-pointer" onClick={handlePlayPause}>
        {isPlaying ? (
          <AiFillPauseCircle size={35}  />
        ) : (
          <AiFillPlayCircle  size={35}  />
        )}
      </div>
      <div className="mx-1 md:mx-2 cursor-pointer" onClick={handleNextSong}>
        <AiFillStepForward size={20} />
      </div>
    </div>
  );
};

export default Controls;

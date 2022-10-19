import React from "react";
import {
  BsFillVolumeUpFill,
  BsVolumeMuteFill,
  BsVolumeDownFill,
} from "react-icons/bs";

const Volume = ({ value, min, max, onChange, setVolume }) => {
  return (
    <div className="flex justify-center md:justify-center items-center w-[20%] sm:w-[33.33%]">
      <div>
        {value <= 1 && value > 0.5 && (
          <BsVolumeMuteFill
            size={25}
            cursor="pointer"
            onClick={() => setVolume(0)}
          />
        )}
        {value <= 0.5 && value > 0 && (
          <BsVolumeDownFill
            size={25}
            cursor="pointer"
            onClick={() => setVolume(0)}
          />
        )}
        {value === 0 && (
          <BsFillVolumeUpFill
            size={25}
            cursor="pointer"
            onClick={() => setVolume(1)}
          />
        )}
      </div>
      <input
        type="range"
        step="any"
        value={value}
        min={min}
        max={max}
        onChange={onChange}
        className="hidden sm:block sm:w-32 lg:w-40 h-1 ml-2 cursor-pointer appearance-none rounded-md"
      />
    </div>
  );
};

export default Volume;

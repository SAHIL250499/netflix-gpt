import React, { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";
import useGetTrailer from "../hooks/useGetTrailer";

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  useGetTrailer(movieId);

  return (
    <div>
      <iframe
        className="w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          trailerVideo?.key +
          "?controls=0&rel=0&autoplay=1&mute=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;

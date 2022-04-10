import React from "react";
import Image from "next/dist/client/image";
import { ThumbDownIcon } from "@heroicons/react/outline";
import { forwardRef } from "react";
const Thumbnail = forwardRef(({ result }, ref) => {
  const BASE_URL = "https://image.tmdb.org/t/p/original";
  return (
    <div
      ref={ref}
      className="px-2 group cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50"
    >
      <Image
        width={480}
        height={270}
        layout="responsive"
        src={
          `${BASE_URL}${result.backdrop_path || result.poster_path}` ||
          `${BASE_URL}${result.poster_path}`
        }
        // alt={result.original_title}
      />
      <div className="p-3">
        <p className="truncate max-w-md">{result.overview}</p>
        <h2 className="mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold">
          {result.title || result.original_name}
        </h2>
        <p className="flex items-center opacity-0 group-hover:opacity-100 text-xs sm:text-[18px]">
          IMDB : {result.vote_average}
        </p>
        <p className="flex items-center opacity-0 group-hover:opacity-100 text-xs sm:text-[15px]">
          {/* {result.media_type && `${result.media_type} . `} */}
          {result.release_date}
          <ThumbDownIcon className="h-5 mx-2" /> {result.vote_count}
        </p>
      </div>
    </div>
  );
});

export default Thumbnail;

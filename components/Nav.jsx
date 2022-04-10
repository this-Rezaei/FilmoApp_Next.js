import React from "react";
import requests from "../utils/requests";
import { useHorizontalScroll } from "./useSideScroll";
import { useRouter } from "next/router";
const Nav = () => {
  const scrollRef = useHorizontalScroll();
  const router=useRouter()
  return (
    <nav className="relative">
      <div
        ref={scrollRef}
        className="flex px-10 sm:px-20 text-2xl whitespace-nowrap scrollbar-hide space-x-10 sm:space-x-20 overflow-x-scroll "
      >
        {Object.entries(requests).map(([key, { title, url }]) => (
          <h2
          onClick={()=> router.push(`/?genre=${key}`)}
            className="last:pr-24 cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white snap-x active:text-red-500"
            key={key}
          >
            {title}
          </h2>
        ))}
      </div>
      <div className="absolute top-0 right-0 bg-gradient-to-l from-[#06202a] h-10 w-1/12" />
    </nav>
  );
};

export default Nav;

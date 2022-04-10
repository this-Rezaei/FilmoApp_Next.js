import React from "react";
import LogFilm from "../public/assets/movie-roll.png";
import Image from "next/image";
import {
  HomeIcon,
  BadgeCheckIcon,
  CollectionIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline";
import HeaderItem from "./HeaderItem";
const Header = () => {
  return (
    <header className="flex flex-col  sm:flex-row m-5 items-center justify-between h-auto gap-5">
      <div className="flex flex-grow justify-evenly max-w-2xl">
        <HeaderItem title="HOME" Icon={HomeIcon} />
        <HeaderItem title="TRENDING" Icon={LightningBoltIcon} />
        <HeaderItem title="VERIFIED" Icon={BadgeCheckIcon} />
        <HeaderItem title="COLLECTIONS" Icon={CollectionIcon} />
        <HeaderItem title="SEARCH" Icon={SearchIcon} />
        <HeaderItem title="ACCOUNT" Icon={UserIcon} />
      </div>
      <div className="w-full md:w-auto border  cursor-pointer rounded border-2 border-[#093242] p-1 text-center">
        <h1 className="text-4xl">FilmBaz</h1>
      </div>
    </header>
  );
};

export default Header;

import React from "react";

const HeaderItem = ({ Icon, title }) => {
  return (
    <div className="flex flex-col items-center group w-12 sm:w-20 hover:text-white cursor-point">
      <Icon className="h-8 mb-1  group-hover:animate-bounce" />
      <p className="opacity-0 font-bold text-xs group-hover:opacity-100 tracking-widest">
        {title}
      </p>
    </div>
  );
};

export default HeaderItem;

import React from "react";
import Thumbnail from "../components/Thumbnail";
const Results = ({ results }) => {
  return (
    <div className="px-2n my-10 sm:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
      {results.map((result) => (
        <Thumbnail key={result.id} result={result} />
      ))}
    </div>
  );
};

export default Results;

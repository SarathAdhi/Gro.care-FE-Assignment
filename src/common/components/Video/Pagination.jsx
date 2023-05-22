import React, { useContext } from "react";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/solid";
import clsx from "clsx";
import { AppContext } from "../../context";

const VideoPagination = () => {
  const { pageCount, setPageCount, handlePageCount } = useContext(AppContext);

  return (
    <div className="flex justify-between md:grid grid-cols-12 items-center">
      <button
        onClick={() => handlePageCount.decrement()}
        className="border-2 rounded-full w-10 h-10 p-2"
      >
        <ChevronLeftIcon />
      </button>

      {[...Array(10)].map((_, index) => (
        <button
          key={index}
          onClick={() => setPageCount(index)}
          className={clsx(
            "hidden md:block w-10 h-10 rounded-full p-2 font-semibold",
            index === pageCount && "bg-indigo-500 text-white"
          )}
        >
          {index + 1}
        </button>
      ))}

      <p className="block md:hidden">{pageCount + 1}/10</p>

      <button
        onClick={() => handlePageCount.increment()}
        className=" border-2 rounded-full w-10 h-10 p-2"
      >
        <ChevronRightIcon />
      </button>
    </div>
  );
};

export default VideoPagination;

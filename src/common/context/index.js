import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const ContextProvider = ({ children }) => {
  const [pageCount, setPageCount] = useState(0);
  const [videos, setVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const handlePageCount = {
    increment: () => {
      if (pageCount >= 9) return;

      setPageCount(pageCount + 1);
    },

    decrement: () => {
      if (pageCount <= 0) return;

      setPageCount(pageCount - 1);
    },
  };

  return (
    <AppContext.Provider
      value={{
        pageCount,
        setPageCount,
        videos,
        setVideos,
        isLoading,
        setIsLoading,
        handlePageCount,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

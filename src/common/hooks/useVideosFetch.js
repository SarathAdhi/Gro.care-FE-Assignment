import { useContext, useEffect } from "react";
import axios from "../../lib/axios";
import { AppContext } from "../context";

export const useVideosFetch = () => {
  const { videos, setVideos, isLoading, setIsLoading, pageCount } =
    useContext(AppContext);

  async function fetchVideos() {
    setIsLoading(true);

    const response = await axios.get(`/videos?page=${pageCount || 0}`);

    setVideos(response.data.posts);

    setIsLoading(false);
  }

  useEffect(() => {
    fetchVideos();
  }, [pageCount]);

  return { videos, isLoading, fetchVideos, pageCount };
};

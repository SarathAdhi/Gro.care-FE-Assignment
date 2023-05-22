import React from "react";
import PageLayout from "./common/layouts/PageLayout";
import { useVideosFetch } from "./common/hooks/useVideosFetch";
import VideoContainer from "./common/components/Video/Container";
import "./App.css";

const App = () => {
  useVideosFetch();

  return (
    <PageLayout title="Videos">
      <VideoContainer />
    </PageLayout>
  );
};

export default App;

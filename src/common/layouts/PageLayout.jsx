import clsx from "clsx";
import React from "react";

const PageLayout = ({ title = "", className = "", children }) => {
  document.title = title;

  return <main className={clsx("p-4", className)}>{children}</main>;
};

export default PageLayout;

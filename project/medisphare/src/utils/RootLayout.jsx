import React from "react";
import { Outlet } from "react-router-dom";
import ScrollTop from "./ScrollToTop";

const RootLayout = () => {
  return (
    <>
      <ScrollTop behavior="auto" />
      <Outlet />
    </>
  );
};

export default RootLayout;

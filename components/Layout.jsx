import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="w-[90%] lg:w-[1024px] mx-auto">
      <NavBar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;

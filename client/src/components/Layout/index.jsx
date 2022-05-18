import React from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import TopNavigation from "./components/TopNavigation";

export default function Index({ children }) {
  return (
    <>
      <TopNavigation />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}

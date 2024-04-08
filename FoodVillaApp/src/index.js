import React from "react";
import ReactDOM from "react-dom/client";

// default import
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

root.render(<AppLayout />);

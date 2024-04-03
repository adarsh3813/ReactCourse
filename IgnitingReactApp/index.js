import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));
const header1 = React.createElement(
  "h1",
  {
    id: "header1",
    style: {
      color: "red",
    },
  },
  "Namaste Everyone"
);
const header2 = React.createElement(
  "h2",
  {
    id: "header2",
    style: {
      color: "blue",
      backgroundcolor: "green",
    },
  },
  "Welcome some bakchodu in life"
);

const container = React.createElement(
  "div",
  {
    id: "container",
    style: {
      backgroundColor: "yellow",
    },
  },
  [header1, header2]
);

root.render(container);

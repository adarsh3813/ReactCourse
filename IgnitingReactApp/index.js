import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

// React
const header1 = React.createElement(
  "h1",
  {
    id: "header1",
    style: {
      color: "red",
    },
    key: "h1",
  },
  "Namaste Everyone"
);
// root.render(container);

// JSX
const header2 = <h1 id="header2">Namaste JSX!</h1>;

// Functional Component
const HeaderComponent = () => {
  return (
    <div>
      <h1>Namaste Functional Component</h1>
      <h2>h2 tag in Component</h2>
    </div>
  );
};

const normalJsVariable = "Normal Js Variable";

const Title = () => <h2>Sub heading functional Component</h2>;

const HeaderComponent2 = () => (
  <div>
    {header2}
    <HeaderComponent />
    <h2>h2 Tag</h2>
    <h3>h3 tag</h3>
    {Title()}
    {normalJsVariable}
    {25 + 25}
    {"Write any js code in curly braces"}
  </div>
);

root.render(<HeaderComponent2 />);

import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

const title = <h1>Food Villa</h1>;

const HeaderComponent = () => <div>{title}</div>;

root.render(<HeaderComponent />);

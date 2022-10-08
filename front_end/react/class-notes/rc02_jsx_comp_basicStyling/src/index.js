import React from "react";
import ReactDOM from "react-dom/client";

// import App from "./App";
import "./index.css";

const App = () => {
  return (
    <>
      <h1>Hello React </h1>
      <p>merhaba</p>
      <Child />
      <Child />
      <Child />
      <Child />
    </>
  );
};

const Child = () => <p>I am child</p>;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

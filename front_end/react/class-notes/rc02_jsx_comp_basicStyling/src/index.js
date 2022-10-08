import React from "react";
import ReactDOM from "react-dom/client";

// import App from "./App";
import "./index.css";
const a = 5;
const element = (
  <div>
    <h1>Hello React {a} </h1>
    <p>merhaba</p>
    
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(element);

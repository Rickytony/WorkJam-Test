import React from "react";
import ReactDOM from "react-dom";
import { StoriesList } from "./components/StoriesList.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

const Main = () => {
  return <StoriesList />;
};

ReactDOM.render(<Main />, document.getElementById("main"));

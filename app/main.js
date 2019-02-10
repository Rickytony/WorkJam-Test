import React from "react";
import ReactDOM from "react-dom";
import { StoriesList } from "./components/StoriesList.jsx";

const Main = () => {
  return <StoriesList />;
};

ReactDOM.render(<Main />, document.getElementById("main"));

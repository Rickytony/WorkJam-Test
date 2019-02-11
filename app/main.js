import React from "react";
import ReactDOM from "react-dom";
import { StoriesList } from "./components/StoriesList.jsx";
import { Header } from "./components/Header.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

const Main = () => {
  return (
    <React.Fragment>
      <Header />
      <StoriesList />
    </React.Fragment>
  );
};

ReactDOM.render(<Main />, document.getElementById("main"));

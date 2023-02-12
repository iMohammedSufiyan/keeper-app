import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./css/Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark border-secondary border-bottom">
      <div className="container my-2">
        <span className="d-flex mt-2">
          <img
            className=""
            src={require("../images/keep.png")}
            alt="logo"
            width="40"
            height="40"
          />
          <h1 className="navbar-brand ms-2">Keep</h1>
        </span>
      </div>
    </nav>
  );
}

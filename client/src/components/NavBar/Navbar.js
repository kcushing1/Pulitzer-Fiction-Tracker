import React from "react";
import "./navbar.css";
import NavItem from "./NavItem";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-md navcolor">
      <a
        className="navbar-brand navtitle"
        href="https://www.pulitzer.org/prize-winners-by-category/219"
        target="_blank"
        rel="noreferrer"
      >
        Pulitzer Prizes
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <NavItem href="#" name="Fiction List" />
          <NavItem href="#" name="My List" />
        </ul>
      </div>
    </nav>
  );
}

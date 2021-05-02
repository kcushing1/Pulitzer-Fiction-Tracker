import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

export default function NavItem({ name, href }) {
  return (
    <>
      <li className="nav-item ">
        <Link className="nav-link navtext" to={href}>
          {name}
        </Link>
      </li>
    </>
  );
}

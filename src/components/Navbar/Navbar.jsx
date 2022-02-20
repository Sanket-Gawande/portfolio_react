import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.scss";
import { NAV_LINKS, SectionNavigation } from "./navTools";

const Navbar = () => {
  return (
    <nav>
      <div className="navbar">
        <div className="nav_logo">
          <h4> sanket_g__</h4>
        </div>
        <ul className="navlinks">
          {NAV_LINKS.map((item) => {
            return (
              <li key={item.link} className="navlinks_item">
                <NavLink
                  to={`/${item.link}`}
                  className="navlinks_link"
                  onClick={() => SectionNavigation(item.yOffset)}
                >
                  {item.link}
                </NavLink>{" "}
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

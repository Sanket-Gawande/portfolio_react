import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./navbar.scss";
import { NAV_LINKS, SectionNavigation } from "./navTools";
import { motion } from "framer-motion";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav>
      <div className="navbar">
        <div className="nav_logo">
          <img src='/logo.png' alt="sanket" />
        </div>
        <div className="menu_icon" onClick={() => setToggle(true)}>
          <img src="/humberger.svg" alt="menu" />
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
                </NavLink>
              </li>
            );
          })}
        </ul>
        {toggle && (
          <motion.ul
            initial={{ x: "100vw" }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5 }}
            className="navlinks_sm"
          >
            <span className="toggle-cancel" onClick={() => setToggle(false)}>
              <img src="/cancel.svg" alt="X" />
            </span>

            {NAV_LINKS.map((item) => {
              return (
                <li
                  onClick={() => setToggle(false)}
                  key={item.link}
                  className="navlinks_item"
                >
                  <NavLink
                    to={`/${item.link}`}
                    className="navlinks_link"
                    onClick={() => SectionNavigation(item.yOffset)}
                  >
                    {item.link}
                  </NavLink>
                </li>
              );
            })}
          </motion.ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

import React from "react";
import "./section_navs.scss";
import { NavLink } from "react-router-dom";
import { NAV_LINKS , SectionNavigation } from "./Navbar/navTools";
const SectionNavs = () => {
 
  return (
    <div className="section_navs">
      <ul>
        {NAV_LINKS.map((item , i) => {
          return (
            <li key={`list_${i}`}>
              <NavLink
                to={`/${item.link}`}
                onClick={() => SectionNavigation(item.yOffset)}
              ></NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SectionNavs;

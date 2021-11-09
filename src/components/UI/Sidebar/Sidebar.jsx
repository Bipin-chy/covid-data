import React from "react";
import "./Sidebar.css";
import { BiMenuAltLeft } from "react-icons/bi";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar_container">
        <div className="sidebar_content">
          <div className="menu_icon">
            Menu <BiMenuAltLeft />
          </div>

          <div className="menu_item">
            <NavLink to="/" exact={true} activeClassName="activeNavLink">
              Home
            </NavLink>
          </div>

          <div className="menu_item">
            <NavLink to="/filter" activeClassName="activeNavLink">
              Filter
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;

import React from "react";
import "./Sidebar.css";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar_container">
        <div className="sidebar_content">
          <ul className="menu_list">
            <li className="menu_item">
              <NavLink to="/">Home</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;

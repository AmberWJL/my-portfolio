import React, { useState } from "react";
import "./sidebar.css";

const Sidebar = () => {
  const [toggle, showMenu] = useState(false);
  const links = [
    {
      link: "#home",
      icon: "icon-home",
    },
    {
      link: "#about",
      icon: "icon-user-following",
    },
    {
      link: "#publication",
      icon: "icon-note",
    },
    {
      link: "#experience",
      icon: "icon-graduation",
    },
    {
      link: "#project",
      icon: "icon-layers",
    },
  ];

  return (
    <>
      <aside className={toggle ? "aside show-menu" : "aside"}>
        <p href="#home" className="nav__logo">
          Amber
        </p>
        <nav className="nav">
          <div className="nav__menu">
            <ul className="nav__list">
              {links.map(({ link, icon }) => (
                <li className="nav__item">
                  <a href={link} className="nav__link">
                    <i onClick={() => showMenu(!toggle)} className={icon}></i>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        <div className="nav__footer">
          <span className="copyright">&copy; 2025 Amber Wang</span>
        </div>
      </aside>

      <div
        className={toggle ? "nav__toggle nav__toggle-open" : "nav__toggle"}
        onClick={() => showMenu(!toggle)}
      >
        <i className="icon-menu"></i>
      </div>
    </>
  );
};

export default Sidebar;

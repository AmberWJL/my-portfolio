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
			link: "#resume",
      icon: "icon-graduation",
    },
		{
			link: "#work",
      icon: "icon-layers",
		},
    // {
		// 	link: "#blog",
    //   icon: "icon-note",
		// },
		{
			link: "#contact",
      icon: "icon-bubble",
		},
	]


  return (
    <>
    <aside className={toggle ? "aside show-menu" : "aside"}>
      <p href="#home" className="nav__logo">
        Amber
      </p>
      <nav className="nav">
        <div className="nav__menu">
          <ul className="nav__list">
          {links.map(({link, icon})=> (
            <li className="nav__item">
              <a href={link} className="nav__link">
                <i className={icon}></i>
              </a>
            </li>
          ))}	
          </ul>
        </div>
      </nav>

      <div className="nav__footer">
        <span className="copyright">&copy; 2023 Amber Wang</span>
      </div>
    </aside>

    <div className={toggle ? "nav__toggle nav__toggle-open" : "nav__toggle"} onClick={() => showMenu(!toggle)}>
      <i className="icon-menu"></i>
    </div>
    </>
  );
};

export default Sidebar;

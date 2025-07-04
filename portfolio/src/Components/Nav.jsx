import React from "react";
import "../Styles/nav.css";
import { useState } from "react";
import logo from "../Images/Rahul.png";
import Rahul_Adepu_Resume from "../files/Rahul_Adepu_Resume.pdf";

const Nav = () => {
  const [isActive, setIsActive] = useState(false);

  const handleMenuClick = () => {
    setIsActive(!isActive);
  };

  const [navbg, setnavbg] = useState(false);

  const navScroll = () => {
    if (window.scrollY > 50) {
      setnavbg(true);
    } else {
      setnavbg(false);
    }
  };

  window.addEventListener("scroll", navScroll);

  const closemenu = () => {
    setIsActive(false);
  };

  const handleDownload = () => {
    window.open(
      "https://drive.google.com/file/d/1LN1z8h-9eb6vfRMGhd6B-vuKLTQ3Nd7o/view?usp=sharing"
    );
    const link = document.createElement("a");

    link.href = Rahul_Adepu_Resume;
    link.setAttribute("download", "Rahul_Adepu_Resume");
    link.setAttribute("id", "resume-link-1");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="navdiv" id="nav-menu">
      <nav className={navbg ? "activenavbar" : "navbar"} id="nav-menu">
        <div className="max-width">
          <div className="title_logo">
            <img src={logo} alt="logo" />
          </div>
          <ul className={`menu ${isActive ? "active" : ""}`}>
            <li>
              <a
                href="#home"
                className="menu-btn active nav-link home"
                onClick={closemenu}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="menu-btn active nav-link about"
                onClick={closemenu}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="menu-btn active nav-link skills"
                onClick={closemenu}
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="menu-btn active nav-link projects"
                onClick={closemenu}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#statistics"
                className="menu-btn active"
                onClick={closemenu}
              >
                Statistics
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="menu-btn active nav-link contact"
                onClick={closemenu}
              >
                Contact
              </a>
            </li>
            <li id="resume-button-1" className="nav-link resume">
              <button
                class={
                  navbg
                    ? "active-nav-resume-button active-type1"
                    : "nav-resume-button type1"
                }
                onClick={handleDownload}
              ></button>
            </li>
          </ul>
          <div className="menu-btn menu-btn-position" onClick={handleMenuClick}>
            <i className={`fas fa-bars ${isActive ? "active" : ""}`} />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;

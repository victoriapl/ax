import React, { useEffect, useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-scroll";
import {
  HAMBURGER_MENU_ICON,
  NAV_SERVICES,
  WHITE_ARROW,
} from "../../constants";
import "./_header.css";
import { Link as RouterLink } from "react-router-dom";

function useClickOutsideHandler(ref, mainMenu, setMainMenu) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        ref.current &&
        !ref.current.contains(event.target) &&
        event.target.className !== "header-title-arrow" &&
        mainMenu
      ) {
        setMainMenu(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, mainMenu, setMainMenu]);
}

export default function Header({
  navLinks,
  title,
  backgroundColor = "",
  primaryColor = "white",
}) {
  const history = useHistory();
  const [selected, setSelected] = useState(history.location.pathname);
  const [hamburgerState, setHamburgerState] = useState(false);
  const [mainMenu, setMainMenu] = useState(false);
  const wrapperRef = useRef(null);
  useClickOutsideHandler(wrapperRef, mainMenu, setMainMenu);

  return (
    <header
      id='header'
      style={{
        backgroundColor: backgroundColor ? backgroundColor : "#50007E",
      }}>
      <div className='header-title'>
        <h1
          className='header-title-text'
          onClick={() => {
            history.push("/");
            setMainMenu(false);
          }}>
          AX | <span style={{ color: primaryColor }}>{title}</span>
        </h1>
        <img
          className='header-title-arrow'
          style={{
            transform: mainMenu ? "rotate(0deg)" : "rotate(-90deg)",
          }}
          src={WHITE_ARROW}
          width='30'
          alt='white-arrow'
          onClick={() => setMainMenu(!mainMenu)}
        />
      </div>
      <div
        className='header-hamburger'
        onClick={() => setHamburgerState(!hamburgerState)}>
        <img
          src={HAMBURGER_MENU_ICON}
          width={"35"}
          alt={"hamburger-menu"}
        />
      </div>
      <div className='header-links'>
        {navLinks.map(({ title, url }, i) => (
          <h3
            key={i}
            onClick={() => {
              setSelected(title);
              if (!backgroundColor) history.push(url);
            }}
            style={{
              borderBottom: selected === title ? "2px solid white" : "",
              textDecoration: "none",
            }}
            className='header-link-item'>
            {backgroundColor ? (
              <Link to={url} smooth={true}>
                {title}
              </Link>
            ) : (
              title
            )}
          </h3>
        ))}
      </div>
      {hamburgerState && (
        <div
          className='header-hamburger-menu'
          style={{
            color: backgroundColor ? primaryColor : "#50007E",
          }}>
          {navLinks.map(({ title, url }, i) => (
            <p
              key={i}
              onClick={() => {
                setSelected(title);
                setHamburgerState(false);
                if (!backgroundColor) history.push(url);
              }}
              style={{
                borderLeft: selected === title ? "2px solid" : "",
                textDecoration: "none",
              }}
              className='header-hamburger--primary-link'>
              {backgroundColor ? (
                <Link
                  to={url}
                  onClick={() => setHamburgerState(false)}
                  smooth={true}>
                  {title}
                </Link>
              ) : (
                title
              )}
            </p>
          ))}
          <div className='header-hamburger--footer'>
            {NAV_SERVICES.map(({ title, url }, i) => (
              <p key={i}>
                <RouterLink
                  to={url}
                  style={{
                    color: backgroundColor ? primaryColor : "#50007E",
                  }}
                  onClick={() => setHamburgerState(false)}>
                  {title}
                </RouterLink>
              </p>
            ))}
          </div>
        </div>
      )}
      <div
        className='header-main-menu-items'
        style={{
          backgroundColor: backgroundColor ? primaryColor : "#50007E",
        }}
        ref={wrapperRef}>
        {mainMenu &&
          NAV_SERVICES.map(({ title, url }, i) => (
            <RouterLink
              key={i}
              className='header-main-menu-item'
              to={url}
              onClick={() => setMainMenu(false)}>
              {title}
            </RouterLink>
          ))}
      </div>
    </header>
  );
}

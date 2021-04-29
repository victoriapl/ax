import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-scroll";
import { HAMBURGER_MENU_ICON, NAV_SERVICES } from "../../constants";
import "./_header.css";
import { Link as RouterLink } from "react-router-dom";

export default function Header({
  navLinks,
  title,
  backgroundColor = "",
  primaryColor = "white",
}) {
  const history = useHistory();
  const [selected, setSelected] = useState(history.location.pathname);
  const [hamburgerState, setHamburgerState] = useState(false);

  return (
    <header
      id='header'
      style={{
        backgroundColor: backgroundColor ? backgroundColor : "#50007E",
      }}>
      <h1 className='header-title' onClick={() => history.push("/")}>
        AX | <span style={{ color: primaryColor }}>{title}</span>
      </h1>
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
    </header>
  );
}

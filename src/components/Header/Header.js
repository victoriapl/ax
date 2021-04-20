import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { HAMBURGER_MENU_ICON, NAV, TITLE } from "../../constants";
import "./_header.css";

export default function Header() {
  const history = useHistory();
  const [selected, setSelected] = useState(history.location.pathname);

  return (
    <header id='header'>
      <h1 className='header-title' onClick={() => history.push("/")}>
        {TITLE}
      </h1>
      <div className='header-hamburger'>
        <img
          src={HAMBURGER_MENU_ICON}
          width={"35"}
          alt={"hamburger-menu"}
        />
      </div>
      <div className='header-links'>
        {NAV.map(({ title, url }, i) => (
          <h3
            key={i}
            onClick={() => {
              setSelected(url);
              history.push(url);
            }}
            style={{
              borderBottom: selected === url ? "2px solid white" : "",
              textDecoration: "none",
            }}
            className='header-link-item'>
            {title}
          </h3>
        ))}
      </div>
    </header>
  );
}

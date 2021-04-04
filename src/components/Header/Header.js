import React from "react";
import { useHistory } from "react-router-dom";
import "./_header.css";

export default function Header({ title, navLinks }) {
  const history = useHistory();
  return (
    <header id='header'>
      <h1 className='header-title' onClick={() => history.push("/")}>
        {title}
      </h1>
      <div className='header-links'>
        {navLinks.map(link => (
          <h3 key={link} className='header-link-item'>
            {link}
          </h3>
        ))}
      </div>
    </header>
  );
}

import React from "react";
import "./_home.css";
import logo from "../../logo.svg";
import { Link } from "react-router-dom";
import { CUSTOM_TITLE, SERVICES, TITLE } from "../../constants";

export default function Home() {
  return (
    <div id='home'>
      <div className='home-section'>
        <img src={logo} className='App-logo' alt='logo' />
        <p className='home-title'>{TITLE}</p>
      </div>
      {SERVICES.map(service => (
        <div
          key={service.text}
          className='home-service'
          style={{ background: service.color }}>
          <Link
            to={`/${service.url}`}
            style={{ textDecoration: "none" }}>
            <p className='home-service-text'>
              {CUSTOM_TITLE({
                text: service.text,
                style: { color: service.textColor, fontWeight: 300 },
              })}
            </p>
          </Link>
        </div>
      ))}
    </div>
  );
}

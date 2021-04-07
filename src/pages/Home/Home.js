import React from "react";
import "./_home.css";
import { services } from "../../data.json";
import { CUSTOM_TITLE } from "../../constants";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div id='home'>
      {services.map(service => (
        <div
          key={service.title}
          className='home-service'
          style={{ background: service.primaryColor }}>
          <Link
            to={`/${service.url}`}
            style={{ textDecoration: "none" }}>
            <p className='home-service-text'>
              {CUSTOM_TITLE({
                text: service.title,
                style: {
                  color: service.secondaryColor,
                  fontWeight: 300,
                },
              })}
            </p>
          </Link>
        </div>
      ))}
    </div>
  );
}

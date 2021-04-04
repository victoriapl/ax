import React from "react";
import { CUSTOM_TITLE } from "../../constants";
import logo from "../../logo.svg";
import "./_banner.css";

export default function Banner({ text, primaryColor, secondaryColor }) {
  return (
    <div className='banner' style={{ backgroundColor: primaryColor }}>
      <img src={logo} className='App-logo' alt='logo' />
      <p className='banner-title'>
        {CUSTOM_TITLE({
          text,
          style: { color: secondaryColor },
        })}
      </p>
    </div>
  );
}

import React from "react";
import { AX_LETTERS, FOOTER_LOGO } from "../../constants";
import "./_banner.css";

export default function Banner({
  text,
  primaryColor,
  extraColor,
  logo,
}) {
  return (
    <div className='banner' style={{ backgroundColor: primaryColor }}>
      <img
        src={logo ? logo : FOOTER_LOGO}
        className='banner-logo'
        alt='logo'
      />
      <span className='banner-title'>
        <img
          src={AX_LETTERS}
          className='banner-title-icon'
          alt={"AX"}
        />{" "}
        <span style={{ color: extraColor }}>{text}</span>
      </span>
    </div>
  );
}

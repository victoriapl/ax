import React from "react";
import parse from "react-html-parser";
import logo from "../../../logo.svg";
import "./_description.css";

export default function Description({
  primaryColor,
  description,
  title,
}) {
  return (
    <div className='description'>
      <div className='description-title'>
        <h3
          className='description-title-text'
          style={{
            color: primaryColor,
            borderBottom: `2px solid ${primaryColor}`,
          }}>
          <img src={logo} alt={"logo"} width={50} />
          {title}
        </h3>
      </div>
      <div>
        <p className='description-text'>{parse(description)}</p>
      </div>
    </div>
  );
}

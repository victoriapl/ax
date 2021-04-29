import React from "react";
import parse from "react-html-parser";
import { LOGO } from "../../../constants";
import "./_description.css";

export default function Description({
  primaryColor,
  description = "",
  title,
  logo = LOGO,
}) {
  return (
    <div className='description' id='service-description'>
      <div className='description-title'>
        <h3
          className='description-title-text'
          style={{
            color: primaryColor,
            borderBottom: `3px solid ${primaryColor}`,
          }}>
          <img
            src={logo}
            alt={"logo"}
            width={logo === LOGO ? 60 : 70}
          />
          {title}
        </h3>
      </div>
      {description && (
        <div>
          <p className='description-text'>{parse(description)}</p>
        </div>
      )}
    </div>
  );
}

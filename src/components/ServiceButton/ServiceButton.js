import React from "react";
import { Link } from "react-router-dom";
import { CUSTOM_TITLE } from "../../constants";

export default function ServiceButton({
  index,
  title,
  primaryColor,
  secondaryColor,
  url,
  imgWidth,
  buttonStyle,
  textStyle,
}) {
  return (
    <div
      key={index}
      className={buttonStyle}
      style={{ background: primaryColor }}>
      <Link to={`/${url}`} style={{ textDecoration: "none" }}>
        <p className={textStyle}>
          {CUSTOM_TITLE({
            text: title,
            style: {
              color: secondaryColor,
            },
            imgWidth: imgWidth,
          })}
        </p>
      </Link>
    </div>
  );
}

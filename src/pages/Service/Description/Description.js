import React, { useEffect, useState } from "react";
import parse from "react-html-parser";
import ExpandableText from "../../../components/ExpandableText/ExpandableText";
import { LOGO } from "../../../constants";
import "./_description.css";

export default function Description({
  primaryColor,
  description = "",
  title,
  logo = LOGO,
  expandableTextData = false,
}) {
  const [expandableTextState, setExplandableTextState] =
    useState(expandableTextData);

  useEffect(() => {
    if (expandableTextState && window.innerWidth > 400) {
      setExplandableTextState(false);
    }
  }, [expandableTextState, setExplandableTextState]);

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
          {expandableTextState ? (
            <ExpandableText
              children={
                <p className='description-text'>{parse(description)}</p>
              }
              buttonStyle={{
                background: "transparent",
                border: "none",
                color: "#6C6C6C",
                fontSize: "11px",
              }}
              className={
                expandableTextState ? expandableTextState.className : ""
              }
            />
          ) : (
            <p className='description-text'>{parse(description)}</p>
          )}
        </div>
      )}
    </div>
  );
}

import React from "react";
import "./_section.css";

export default function Section({
  section,
  primaryColor,
  secondaryColor,
  leftArrow,
  downArrow,
}) {
  return (
    <div className='section' style={{ backgroundColor: primaryColor }}>
      <p className='section-title' style={{ color: secondaryColor }}>
        {section.title}
      </p>
      <img src={downArrow} alt={"arrow"} width={50} />
    </div>
  );
}

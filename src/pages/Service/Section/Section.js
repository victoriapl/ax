import React, { useState } from "react";
import "./_section.css";

export default function Section({
  section,
  primaryColor,
  secondaryColor,
  leftArrow,
  downArrow,
  index,
}) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div
        onClick={() => setOpen(!open)}
        className='section'
        key={index}
        style={{ backgroundColor: primaryColor }}>
        <p className='section-title' style={{ color: secondaryColor }}>
          {section.title}
        </p>
        <img
          src={open ? downArrow : leftArrow}
          alt={"arrow"}
          width={50}
        />
      </div>
      {open && (
        <div className='section-description'>{section.description}</div>
      )}
    </>
  );
}

import React, { useState } from "react";
import "./_section.css";

export default function Section({
  section,
  primaryColor,
  secondaryColor,
  leftArrow,
  downArrow,
}) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div
        onClick={() => setOpen(!open)}
        className='section'
        style={{ backgroundColor: primaryColor }}>
        <p className='section-title' style={{ color: secondaryColor }}>
          <img
            src={section.icon}
            width={70}
            alt='section'
            className='section-img'
          />
          <span>{section.title}</span>
        </p>
        <img
          src={open ? downArrow : leftArrow}
          alt={"arrow"}
          width={40}
        />
      </div>
      {open && (
        <div className='section-description'>
          <img
            src={section.darkerIcon}
            style={{ margin: "auto" }}
            width={150}
            alt='section'
          />
          <span>{section.description}</span>
        </div>
      )}
    </>
  );
}

import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import "./_section.css";

export default function Section({
  section,
  primaryColor,
  extraColor,
  leftArrow,
  downArrow,
}) {
  const [open, setOpen] = useState(false);
  const history = useHistory();

  useEffect(() => {
    setOpen(false);
  }, [history.location]);

  return (
    <>
      <div
        onClick={() => setOpen(!open)}
        className='section'
        style={{ backgroundColor: primaryColor }}>
        <p className='section-title' style={{ color: extraColor }}>
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
            width={70}
            alt='section'
          />
          <span>{section.description}</span>
        </div>
      )}
    </>
  );
}

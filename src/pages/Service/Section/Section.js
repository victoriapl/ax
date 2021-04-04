import React from "react";
import "./_section.css";

export default function Section({
  title,
  primaryColor,
  secondaryColor,
}) {
  return (
    <div className='section' style={{ backgroundColor: primaryColor }}>
      <p className='section-title' style={{ color: secondaryColor }}>
        {title}
      </p>
    </div>
  );
}

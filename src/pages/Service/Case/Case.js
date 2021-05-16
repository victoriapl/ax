import React from "react";
import "./_case.css";

export default function Case({
  data,
  primaryColor,
  secondaryColor,
  femaleIcon,
  maleIcon,
}) {
  const { icon, name, profession, description, quote } = data;
  return (
    <div className='case-wrapper'>
      <div className='case-wrapper-header'>
        <img src={icon} width={70} alt={"case-icon"} />
        <div>
          <h2 style={{ color: primaryColor }} className='case-name'>
            {name}
          </h2>
          <h2
            style={{ color: secondaryColor }}
            className='case-profession'>
            {profession}
          </h2>
        </div>
      </div>

      <p
        className='case-description'
        style={{ borderColor: primaryColor }}>
        {description}
      </p>
      <p style={{ color: secondaryColor }} className='case-quote'>
        {quote}
      </p>
    </div>
  );
}

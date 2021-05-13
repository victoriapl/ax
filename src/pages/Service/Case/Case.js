import React from "react";
import "./_case.css";

export default function Case({
  data,
  primaryColor,
  secondaryColor,
  femaleIcon,
  maleIcon,
}) {
  const { icon, name, profession, description, quote, genre } = data;
  return (
    <div className='case-wrapper'>
      <img src={icon} width={50} alt={"case-icon"} />
      <h2 style={{ color: primaryColor }} className='case-name'>
        {name}
      </h2>
      <h2 style={{ color: secondaryColor }} className='case-profession'>
        {profession}
      </h2>
      <p
        className='case-description'
        style={{ borderColor: primaryColor }}>
        {description}
      </p>
      <p style={{ color: secondaryColor }} className='case-quote'>
        {quote}
      </p>
      <div className='case-genre-icon'>
        <img
          src={genre === "female" ? femaleIcon : maleIcon}
          alt='genre-icon'
        />
      </div>
    </div>
  );
}

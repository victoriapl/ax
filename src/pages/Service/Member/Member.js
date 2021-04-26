import React from "react";
import "./_member.css";

export default function Member({
  name,
  profession,
  image,
  primaryColor,
  secondaryColor,
}) {
  return (
    <div className='member'>
      <div className='mamber-image-wrapper'>
        <img
          src={image}
          style={{ borderColor: primaryColor }}
          className='member-image'
          alt='member'
        />
      </div>
      <h2 style={{ color: primaryColor }} className='member-name'>
        {name}
      </h2>
      <h2
        style={{ color: secondaryColor }}
        className='member-profession'>
        {profession}
      </h2>
    </div>
  );
}

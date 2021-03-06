import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import "./_member.css";

export default function Member({
  name,
  profession,
  image,
  primaryColor,
  secondaryColor,
}) {
  const history = useHistory();
  const [borderColor, setBorderColor] = useState(primaryColor);
  const [color, setColor] = useState(secondaryColor);

  useEffect(() => {
    setBorderColor(primaryColor);
    setColor(secondaryColor);
  }, [primaryColor, secondaryColor, history.location]);

  return (
    <div className='member'>
      <div className='member-image-wrapper'>
        <img
          src={image}
          style={{ borderColor }}
          className='member-image'
          alt='member'
        />
      </div>
      <h2 style={{ color: borderColor }} className='member-name'>
        {name}
      </h2>
      <h2 style={{ color }} className='member-profession'>
        {profession}
      </h2>
    </div>
  );
}

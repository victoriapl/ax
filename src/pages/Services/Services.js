import React from "react";
import {
  title,
  primaryColor,
  description,
  services,
} from "../../data.json";
import Description from "../Service/Description/Description";

export default function Services() {
  return (
    <div className='services'>
      <Description
        primaryColor={primaryColor}
        description={description}
        title={title}
      />
      {services.map(({ description, image }) => (
        <div>
          <img src={`${image}`} alt={image} />
          <p>{description}</p>
        </div>
      ))}
    </div>
  );
}

import React from "react";
import ServiceButton from "../../components/ServiceButton/ServiceButton";
import {
  title,
  primaryColor,
  description,
  services,
} from "../../data.json";
import Description from "../Service/Description/Description";
import "./_services.css";

export default function Services() {
  return (
    <div className='services'>
      <Description
        primaryColor={primaryColor}
        description={description}
        title={title}
      />
      <div className='services-wrapper'>
        {services.map((service, i) => (
          <div className='services-item' key={i}>
            <img
              src={service.image}
              className='services-image'
              style={{ borderColor: service.borderColor }}
              alt={service.image}
            />
            <p className='services-item-text'>
              {service.shortDescription}
            </p>
            <ServiceButton
              title={service.title}
              primaryColor={service.primaryColor}
              secondaryColor={service.secondaryColor}
              url={service.url}
              imgWidth={35}
              buttonStyle={"services-button"}
              textStyle={"services-button-text"}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

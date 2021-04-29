import React from "react";
import { contact } from "../../data.json";
import "./_contact.css";

export default function Contact({
  primaryColor,
  secondaryColor = "white",
  serviceContact = undefined,
  serviceClass = "",
}) {
  const contactInfo = serviceContact ? serviceContact : contact;
  return (
    <div
      className='contact'
      id='service-contact'
      style={{ backgroundColor: secondaryColor }}>
      <div
        className={`contact-logo contact-logo-img${
          serviceClass && "-" + serviceClass
        }`}></div>
      <div className='contact-data'>
        {contactInfo.map(({ icon, text }, i) => (
          <div className='contact-data-info' key={i}>
            <img
              src={icon}
              alt={"icon"}
              className='contact-data-info-icon'
            />
            <span style={{ color: primaryColor }}>{text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

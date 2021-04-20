import React from "react";
import { contact, primaryColor } from "../../data.json";
import "./_contact.css";

export default function Contact() {
  return (
    <div className='contact'>
      <div className='contact-logo'></div>
      <div className='contact-data'>
        {contact.map(({ icon, text }) => (
          <div className='contact-data-info'>
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

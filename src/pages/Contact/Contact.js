import React from "react";
import { CONTACT_NAME_ICON, LOGO } from "../../constants";
import { contact, primaryColor } from "../../data.json";
import "./_contact.css";

export default function Contact() {
  return (
    <div className='contact'>
      <div className='contact-margined'>
        <img src={LOGO} alt={"logo"} className='contact-logo' />
        <div className='contact-data'>
          <img
            src={CONTACT_NAME_ICON}
            alt={"contact-name"}
            className='contact-data-name'
            width={"60%"}
          />
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
    </div>
  );
}

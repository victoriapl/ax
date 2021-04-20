import React from "react";
import { about, philosophy, primaryColor } from "../../data.json";
import Description from "../Service/Description/Description";

import "./_about.css";

export default function About() {
  return (
    <div className='about-view'>
      <Description
        primaryColor={primaryColor}
        description={about.description}
        title={about.title}
      />
      <div className='about'>
        <div className='about-content'>
          <div className='about-images1'></div>
          <div className='about-section'>
            <p style={{ color: primaryColor }}>{about.subtitle}</p>
            <p>{about.text1}</p>
            <div className='about-images2'></div>
            <p>{about.text2}</p>
          </div>
        </div>
        {/* PERFIL */}
        <div className='about-profile'>
          <div
            className='about-profile-img-wrapper'
            style={{ borderColor: primaryColor }}>
            <div
              style={{
                borderColor: primaryColor,
              }}
              className={"about-profile-img-src"}></div>
          </div>
          <div>
            <h2
              className='about-profile-name'
              style={{ color: primaryColor }}>
              {about.name}
            </h2>
            <h3 className='about-profile-profession'>
              {about.profession}
            </h3>
          </div>
          <p className='about-profile-description'>{about.aboutMe}</p>
        </div>
      </div>
      {/* FILOSOFÍA */}
      <div className='about-philosophy'>
        <h1
          className='about-philosophy-title'
          style={{ color: primaryColor }}>
          {philosophy.title}
        </h1>
        <p className='about-philosophy-description'>
          {philosophy.description}
        </p>
      </div>
    </div>
  );
}

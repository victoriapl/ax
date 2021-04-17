import React from "react";
import { about, philosophy, primaryColor } from "../../data.json";
import Description from "../Service/Description/Description";

import "./_about.css";

export default function About() {
  return (
    <div>
      <Description
        primaryColor={primaryColor}
        description={about.description}
        title={about.title}
      />
      <div className='about'>
        <div className='about-content'>
          <div className='about-images'>
            {about.images.map(({ text, img }) => (
              <div>
                <img
                  className='about-images-item'
                  src={img}
                  alt={text}
                />
                <p
                  style={{ color: primaryColor }}
                  className='about-images-text'>
                  {text}
                </p>
              </div>
            ))}
          </div>
          <div className='about-section'>
            <p style={{ color: primaryColor }}>{about.subtitle}</p>
            <p>{about.text1}</p>
            {/* IMAGENES */}
            <div className='about-section-images'>
              {about.text1Images.map(({ text, img }) => (
                <div className='about-section-images-wrapper'>
                  <img
                    className='about-images-item'
                    src={img}
                    alt={text}
                  />
                  <span
                    style={{ color: primaryColor }}
                    className='about-images-text'>
                    {text}
                  </span>
                </div>
              ))}
            </div>
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
                backgroundImage: "url(/icons/about/testProfile.png)",
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

/* eslint-disable no-lone-blocks */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getServiceData } from "../../helpers";
import Banner from "../../components/Banner/Banner";
import Description from "./Description/Description";
import { primaryColor } from "../../data.json";

import "./_service.css";
import Section from "./Section/Section";
import Case from "./Case/Case";
import Contact from "../Contact/Contact";
import Member from "./Member/Member";

export default function Service() {
  const { service } = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    const serviceData = getServiceData(service);
    const description = serviceData?.description.replace(
      /\n/g,
      "<br />"
    );
    setData({ ...serviceData, description });
  }, [service]);

  useEffect(() => {
    document.getElementById("header").style.backgroundColor =
      data.secondaryColor;
    document.getElementById("footer").style.backgroundColor =
      data.secondaryColor;

    return () => {
      document.getElementById(
        "header"
      ).style.backgroundColor = primaryColor;
      document.getElementById(
        "footer"
      ).style.backgroundColor = primaryColor;
    };
  }, [data]);

  return (
    <div className='service'>
      <Banner
        text={data.title}
        primaryColor={data.primaryColor}
        secondaryColor={data.secondaryColor}
      />
      <Description
        primaryColor={
          data.title === "ART" ? data.secondaryColor : data.primaryColor
        }
        description={data.description}
        title={data.descriptionTitle}
        logo={data.logo}
      />
      {/* SECTIONS */}
      <div className='service-sections'>
        {data.sections?.map((section, i) => (
          <React.Fragment key={i}>
            <Section
              section={section}
              primaryColor={data.primaryColor}
              secondaryColor={data.secondaryColor}
              leftArrow={data.leftArrow}
              downArrow={data.downArrow}
            />
          </React.Fragment>
        ))}
      </div>

      {/* SUCCESSFUL CASES */}
      <Description
        primaryColor={
          data.title === "ART" ? data.secondaryColor : data.primaryColor
        }
        description={data.successfulCases?.description}
        title={data.successfulCases?.title}
        logo={data.logo}
      />
      <div className='service-cases'>
        {data.successfulCases?.cases?.map(
          (
            { icon, name, profession, description, quote, genre },
            index
          ) => (
            <React.Fragment key={index}>
              <Case
                data={{
                  icon,
                  name,
                  profession,
                  description,
                  quote,
                  genre,
                }}
                primaryColor={data.primaryColor}
                secondaryColor={data.secondaryColor}
                femaleIcon={data.successfulCases.femaleIcon}
                maleIcon={data.successfulCases.maleIcon}
              />
            </React.Fragment>
          )
        )}
      </div>
      {/* CONTACT */}
      <Contact
        primaryColor={data.secondaryColor}
        secondaryColor={data.primaryColor}
        serviceContact={data.contactIcons}
        serviceClass={data.title}
      />
      {/* TEAM */}
      <div>
        <Description
          primaryColor={
            data.title === "ART"
              ? data.secondaryColor
              : data.primaryColor
          }
          title={data.team?.title}
          logo={data.logo}
        />
        <div className='service-members'>
          {data.team?.members.map(({ name, profession, image }, i) => (
            <React.Fragment key={i}>
              <Member
                name={name}
                profession={profession}
                image={image}
                primaryColor={data.primaryColor}
                secondaryColor={data.secondaryColor}
              />
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}

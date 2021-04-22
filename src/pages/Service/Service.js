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
        primaryColor={data.primaryColor}
        description={data.description}
        title={data.descriptionTitle}
      />
      {/* SECTIONS */}
      <div className='service-sections'>
        {data.sections?.map((section, i) => (
          <Section
            section={section}
            primaryColor={data.primaryColor}
            secondaryColor={data.secondaryColor}
            leftArrow={data.leftArrow}
            downArrow={data.downArrow}
            index={i}
          />
        ))}
      </div>

      {/* SUCCESSFUL CASES */}
      <Description
        primaryColor={data.primaryColor}
        description={data.successfulCases?.description}
        title={data.successfulCases?.title}
      />
      <div className='service-cases'>
        {data.successfulCases?.cases?.map(
          (
            { icon, name, profession, description, quote, genre },
            index
          ) => (
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
              index={index}
              femaleIcon={data.successfulCases.femaleIcon}
              maleIcon={data.successfulCases.maleIcon}
            />
          )
        )}
      </div>
    </div>
  );
}

{
  /* /* .services-description-three-visible-rows {
   max-height: calc(16px * 15);
} */
}
{
  /* <ExpandableText
        className={"services-description-three-visible-rows"}>
        <p>{description}</p>
      </ExpandableText> */
}

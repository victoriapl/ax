import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getServiceData } from "../../helpers";
import Banner from "../../components/Banner/Banner";
import Description from "./Description/Description";

import "./_service.css";
import Section from "./Section/Section";

export default function Service() {
  const { service } = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    const serviceData = getServiceData(service);
    const description = serviceData.description.replace(
      /\n/g,
      "<br />"
    );
    setData({ ...serviceData, description });
  }, [service]);

  return (
    <>
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
      {data.sections?.map(section => (
        <Section
          title={section.title}
          primaryColor={data.primaryColor}
          secondaryColor={data.secondaryColor}
        />
      ))}
    </>
  );
}

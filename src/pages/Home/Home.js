import React from "react";
import "./_home.css";
import { services } from "../../data.json";
import ServiceButton from "../../components/ServiceButton/ServiceButton";

export default function Home() {
  return (
    <div id='home'>
      {services.map(({ title, primaryColor, secondaryColor, url }) => (
        <ServiceButton
          title={title}
          primaryColor={primaryColor}
          secondaryColor={secondaryColor}
          url={url}
          imgWidth={50}
          buttonStyle={"home-service"}
          textStyle={"home-service-text"}
        />
      ))}
    </div>
  );
}

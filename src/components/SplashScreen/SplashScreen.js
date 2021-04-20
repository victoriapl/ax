import React from "react";
import { FOOTER_LOGO } from "../../constants";
import { primaryColor } from "../../data.json";
import "./_splashScreen.css";

export default function SplashScreen() {
  return (
    <div className='splash' style={{ backgroundColor: primaryColor }}>
      <img alt={"ax-logo"} className='splash-logo' src={FOOTER_LOGO} />
      <p className='splash-text'>AX | SERVICES</p>
    </div>
  );
}

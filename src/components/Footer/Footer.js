import React from "react";
import { LOGO } from "../../constants";
import "./_footer.css";

export default function Footer() {
  return (
    <div id='footer'>
      <img src={LOGO} alt={"logo"} width={100} />
    </div>
  );
}

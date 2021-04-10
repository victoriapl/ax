import React from "react";
import { FOOTER_LOGO } from "../../constants";
import "./_footer.css";

export default function Footer() {
  return (
    <div id='footer'>
      <img src={FOOTER_LOGO} alt={"logo"} width={90} />
    </div>
  );
}

import React from "react";
import { useHistory } from "react-router";
import { FOOTER_LOGO } from "../../constants";
import "./_footer.css";

export default function Footer() {
  const history = useHistory();
  return (
    <div id='footer'>
      <img
        src={FOOTER_LOGO}
        alt={"logo"}
        onClick={() => history.push("/")}
        className='footer-logo'
      />
    </div>
  );
}

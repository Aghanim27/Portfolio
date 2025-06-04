import React from "react";
import { Instagram, Facebook, GitHub, LinkedIn, Mail } from "@mui/icons-material";
import "../styles/footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        {/* <a href="https://www.instagram.com/its_aghanim/">
          <Instagram />
        </a>
        <Facebook
          onClick={() => window.open("https://www.facebook.com/khotheagh")}
        />
        <GitHub onClick={() => window.open("https://github.com/Aghanim27")} /> */}
        <a href="https://www.linkedin.com/in/kaunghtetoo27">
          <LinkedIn/>
        </a>
        <a href="mailto:kaunghtet.2798@gmail.com">
          <Mail/>
        </a>
      </div>
    </div>
  );
}

export default Footer;

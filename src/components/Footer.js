import React from "react";
import { Instagram, Facebook, GitHub } from "@mui/icons-material";
import "../styles/footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <Instagram />
        <Facebook />
        <GitHub />
      </div>
    </div>
  );
}

export default Footer;

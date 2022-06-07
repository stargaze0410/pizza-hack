import { border } from "@mui/system";
import React from "react";
import "./Footer.css";
import { AccessAlarm, ThreeDRotation } from "@mui/icons-material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import HomeIcon from "@mui/icons-material/Home";
// import "../payment-logos/Rounded Corners/SVG/Visa";

const Footer = () => {
  return (
    <div className="container-footer">
      <div className="container-footer-items">
        <div className="footer-item">
          <h3>Contacts</h3>
          <p>0312510707</p>
          <p>0555510707</p>
          <p>0705510707</p>
        </div>
        <div className="footer-item">
          <h3>Social</h3>
          <HomeIcon sx={{ fontSize: 40 }} />
          <InstagramIcon sx={{ fontSize: 40 }} />
          <FacebookIcon sx={{ fontSize: 40 }} />
          <TwitterIcon sx={{ fontSize: 40 }} />
        </div>
        <div className="footer-item">
          <h3>Payment</h3>

          <p>9456945</p>
          <p>495359</p>
        </div>
      </div>

      <div className="container-footer-down">
        <h4>EmpirePizza</h4>
        <img
          src="https://mystickermania.com/cdn/stickers/109-512x512.png"
          width={70}
          alt=""
        />
      </div>
    </div>
  );
};

export default Footer;

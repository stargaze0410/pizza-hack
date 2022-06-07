import { border } from "@mui/system";
import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
   <div className="container-footer">
       <div className="container-footer-items">
       <div className="footer-item">
           <h3>Contacts</h3>
           <p>99696</p>
           <p>9456945</p>
           <p>495359</p>
       </div>
       <div className="footer-item">
           <h3>Social</h3>
           <p>99696</p>
           <p>9456945</p>
           <p>495359</p>
       </div>
       <div className="footer-item">
           <h3>Social</h3>
           <p>99696</p>
           <p>9456945</p>
           <p>495359</p>
       </div>
       </div>

       <div className="container-footer-down">
    <h4>EmpirePizza</h4>
    <img src="https://mystickermania.com/cdn/stickers/109-512x512.png" width={90} alt="" />
    </div>

   </div>
  );
};

export default Footer;

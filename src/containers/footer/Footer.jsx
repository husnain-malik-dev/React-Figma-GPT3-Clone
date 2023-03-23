import React from "react";
import "./Footer.css";
import gpt3Logo from "../../logo.svg";

const Footer = () => {
  return (
    <div className="footer-container section__padding">
      <div className="footer-heading">
        <h1 className="gradient__text">
          Do you want to step in to the future before others
        </h1>
      </div>

      <div className="footer-btn">
        <p>Request Early Access</p>
      </div>

      <div className="footer-links">
        <div className="footer-links-img">
          <img src={gpt3Logo} alt="" />
          <p>Crechterwoord K12 182 DK Alknjkcb, <br /> All Rights Reserved</p>
        </div>

        <div className="footer-links-tags">
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className="footer-links-tags">
          <h4>Company</h4>
          <p>Terms & Conditions </p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className="footer-links-tags">
          <h4>Get in touch</h4>
          <p>Crechterwoord K12 182 DK Alknjkcb</p>
          <p>085-132567</p>
          <p>info@payme.net</p>
        </div>
      </div>

      <div className="footer-copyright">
      <p>@2023 Husnian Malik GPT-3 clone. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;

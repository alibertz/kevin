import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="container-fluid footer">
        <div className="container">
          <h6 id="footer-tagline">THANKS FOR VISITING - reach me at</h6>

          <h4 id="footer-eml">{"kevinaliberti@gmail.com"}</h4>
          <div className="resume-btn-wrap">
            <a
              href="https://github.com/alibertz/resumesite/raw/gh-pages/kevin_aliberti_resume.pdf"
              className="resume-btn-link"
              target="_blank"
              download
              rel="noreferrer"
            >
              <div className="resume-btn">
                <i className="far fa-arrow-alt-circle-down"></i> download resume
              </div>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

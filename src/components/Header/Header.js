import React, { Component } from "react";
import "./Header.css";
// import LocomotiveScroll from "locomotive-scroll";

class Header extends Component {
  // componentDidMount() {
  //   const scroll = new LocomotiveScroll({
  //     el: document.querySelector(".parallax"),
  //     smooth: true,
  //   });
  // }
  render() {
    return (
      <header>
        <div className="parallax">
          <div style={{ paddingTop: "15%" }}>
            <img
              src={require("../../images/profile.jpg")}
              alt=""
              id="profile-img"
              // role="img"
              // aria-label=""
              // data-scroll
              // data-scroll-direction="vertical"
              // data-scroll-speed="6"
            />

            <h1
              id="name"
              className="6"
              // role="img"
              // aria-label=""
              // data-scroll
              // data-scroll-direction="vertical"
              // data-scroll-speed="-3"
            >
              KEVIN ALIBERTI
            </h1>
            <h2 className="6" id="tagline">
              Full Stack Developer
            </h2>

            <div className="social-buttons">
              <div className="social-btn">
                <a
                  href="https://github.com/alibertz"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={require("../../images/GitHub-Mark-Light-64px.png")}
                    alt=""
                    style={{ width: "48px", height: "48px" }}
                  />
                </a>
              </div>
              <div className="social-btn">
                <a
                  href="https://www.linkedin.com/in/kevinaliberti"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={require("../../images/ln-Blue-48.png")}
                    alt=""
                    style={{ width: "48px", height: "48px" }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;

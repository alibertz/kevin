import React from "react";
import "../MainContent.css";

export default function AboutMe() {
  return (
    <section id="about-me">
      <div className="container-fluid elem">
        <div className="container">
          <h3>ABOUT ME</h3>
          <div className="about-me-wrapper">
            <div className="">
              <img
                src={require("../../../images/icons8-quote-left-50.png")}
                alt="quotes"
                id="quotes"
              />
              <div id="statement">
                Hi! I'm a full-stack web developer who believes the best in tech
                should be more accessible, more approachable, and more
                affordable for everyone involved.{" "}
              </div>
              <p id="about-me-p">
                <br />
                While rapidly learning more in both areas every day, I apply
                gained knowledge and skills whenever and wherever I can. I have
                a strong technology-rich background and a design-oriented mind,
                and this combination has allowed me to effectively develop
                beautiful, seamless web interfaces and experiences.
              </p>
            </div>
            <div className="technical-skills" data-scroll data-scroll-speed="2">
              <div className="frontEnd">
                <h4>Front End</h4>
                <div className="icons">
                  <div>
                    <img
                      src={require("../../../images/react.png")}
                      alt="React logo"
                    />
                    <h5>React.js</h5>
                  </div>
                  <div>
                    <figure
                      style={{
                        display: "grid",
                        "grid-template-columns": "1fr 1fr",
                        margin: "0",
                        paddingTop: ".55rem",
                      }}
                    >
                      <img
                        src={require("../../../images/html.png")}
                        alt="HTML logo"
                        style={{ height: "21px", width: "20px" }}
                      />
                      <img
                        src={require("../../../images/css.png")}
                        alt="CSS logo"
                        style={{ height: "21px", width: "20px" }}
                      />
                    </figure>

                    <h5>HTML5/CSS3</h5>
                  </div>
                  <div>
                    <img
                      src={require("../../../images/javascript.png")}
                      alt="JS logo"
                    />
                    <h5>JavaScript</h5>
                  </div>
                  <div>
                    <img
                      src={require("../../../images/sass.png")}
                      alt="sass logo"
                    />
                    <h5>Sass</h5>
                  </div>
                  <div>
                    <img
                      src={require("../../../images/redux.png")}
                      alt="sass logo"
                    />
                    <h5>Redux</h5>
                  </div>
                  <div>
                    <img
                      src={require("../../../images/gatsbyjs-icon.png")}
                      alt="mySQL logo"
                    />
                    <h5>Gatsby.js</h5>
                  </div>
                  <div>
                    <img
                      src={require("../../../images/next-js-logo-7929BCD36F-seeklogo.com.png")}
                      alt="nextjs logo"
                      style={{
                        width: "44px",
                        height: "28px",
                        paddingTop: ".3rem",
                        marginLeft: "-.3rem",
                      }}
                    />
                    <h5>Next.js</h5>
                  </div>
                </div>
              </div>
              <div className="backEnd">
                <h4>Back End</h4>
                <div className="icons">
                  <div>
                    <img
                      src={require("../../../images/nodejs.png")}
                      alt="node logo"
                    />
                    <h5>Node.js</h5>
                  </div>
                  <div>
                    <img
                      src={require("../../../images/apollo.png")}
                      alt="Apollo logo"
                    />
                    <h5>Apollo</h5>
                  </div>
                  <div>
                    <img
                      src={require("../../../images/graphql.png")}
                      alt="GraphQL logo"
                    />
                    <h5>GraphQL</h5>
                  </div>
                  <div>
                    <img
                      src={require("../../../images/mysql.png")}
                      alt="mysql logo"
                    />
                    <h5>mySQL</h5>
                  </div>
                  <div>
                    <img
                      src={require("../../../images/mongodb.png")}
                      alt="mongodb logo"
                    />
                    <h5>MongoDB</h5>
                  </div>
                  <div>
                    <img
                      src={require("../../../images/postgresql.png")}
                      alt="postgresql logo"
                    />
                    <h5>PostgreSQL</h5>
                  </div>
                  <div>
                    <img
                      src={require("../../../images/expressjs-icon.png")}
                      alt="mySQL logo"
                    />
                    <h5>express.js</h5>
                  </div>
                </div>
              </div>
              <div className="other">
                <h4>Other Tech</h4>
                <div className="icons">
                  <div>
                    <img
                      src={require("../../../images/git-icon.png")}
                      alt="git logo"
                    />
                    <h5>Git</h5>
                  </div>
                  <div>
                    <img
                      src={require("../../../images/python.png")}
                      alt="python logo"
                    />
                    <h5>Python</h5>
                  </div>
                  <div>
                    <img
                      src={require("../../../images/wordpress-icon.png")}
                      alt="Wordpress logo"
                    />
                    <h5>Wordpress</h5>
                  </div>
                  <div>
                    <img
                      src={require("../../../images/icons8-adobe-photoshop-48.png")}
                      alt="photoshop logo"
                    />
                    <h5>Photoshop</h5>
                  </div>
                  <div>
                    <img
                      src={require("../../../images/gitlab.png")}
                      alt="gitlab logo"
                    />
                    <h5>Gitlab</h5>
                  </div>
                  <div>
                    <img
                      src={require("../../../images/salesforce.png")}
                      alt="salesforce logo"
                    />
                    <h5>Salesforce</h5>
                  </div>
                  <div>
                    <h5> </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
